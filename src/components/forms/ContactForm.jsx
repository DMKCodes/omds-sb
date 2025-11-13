import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";

const ContactForm = ({
    thresholdMs = 3000,
    className = ""
}) => {
    const [status, setStatus] = useState("idle"); // idle | ok | error | spam
    const formRef = useRef(null);
    const { 
        register, 
        handleSubmit,
        formState: { isSubmitting },
    } = useForm({
        mode: "onSubmit",
        shouldUseNativeValidation: true,
    });

    useEffect(() => {
        if (formRef.current) {
            formRef.current.dataset.start = String(performance.now());
        }
    }, []);

    const onSubmit = async (data, event) => {
        // Anti-spam
        const start = Number(event?.currentTarget?.dataset?.start ?? 0);
        let elapsed = (event?.timeStamp ?? 0) - start;
        if (!Number.isFinite(elapsed) || elapsed < 0) elapsed = thresholdMs + 1;
        if (data.website || elapsed < thresholdMs) {
            setStatus("spam");
            return;
        }

        const formEl = event?.target;
        if (formEl && formEl instanceof HTMLFormElement) {
            const hidden = document.createElement("input");
            hidden.type = "hidden";
            hidden.name = "_elapsed";
            hidden.value = String(elapsed);
            formEl.appendChild(hidden);
            formEl.submit();
        }
    };

    return (
        <form
            className={`contact ${className}`}
            onSubmit={handleSubmit(onSubmit)}
            ref={formRef}
            action="https://usebasin.com/f/4da2cdee83ad"
            method="POST"
            acceptCharset="UTF-8"
            id="form"
            noValidate
        >
            {/* Honeypot: visible only to bots */}
            <div className="hp" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input name="website" id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
            </div>
            
            <div className="grid">
                <div className="field">
                    <label htmlFor="name">Name<span aria-hidden="true"> *</span></label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Jane Doe"
                        {...register("name", { required: "Please enter your name." })}
                        aria-required="true"
                    />
                </div>

                <div className="field">
                    <label htmlFor="org">Organization</label>
                    <input 
                        name="org" 
                        id="org" 
                        type="text" 
                        placeholder="Your Organization" {...register("org")} 
                    />
                </div>

                <div className="field">
                    <label htmlFor="email">Email<span aria-hidden="true"> *</span></label>
                    <input
                        name="email"
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        {...register("email", {
                            required: "Enter your email address.",
                            pattern: { value: /\S+@\S+\.\S+/, message: "Please enter a valid email address."},
                        })}
                        aria-required="true"
                    />
                </div>
            </div>

            <div className="field">
                <label htmlFor="message">Message<span aria-hidden="true"> *</span></label>
                <textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us about your event, venue, and preferred dates."
                    {...register("message", { required: "Please include a short message.", minLength: { value: 10, message: "At least 10 characters, please." } })}
                    aria-required="true"
                />
            </div>

            {/* A11y status messages */}
            <div className="sr-only" role="status" aria-live="polite">
                {status === "ok" && "Thanks! Your message was sent."}
                {status === "error" && "Sorry, something went wrong. Please try again later."}
                {status === "spam" && "Spam detected, submission blocked."}
            </div>

            <div className="actions">
                <button className="c-button" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
                <p className="form-note">We typically reply within 1-2 business days.</p>
            </div>
        </form>
    );
};

export default ContactForm;