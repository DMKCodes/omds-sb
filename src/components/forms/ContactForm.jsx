import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import "../../styles/pages/_contact.scss";

/*
    Props:
    - action: string | undefined (provider endpoint)
    - method: "POST" | "GET" (default: POST)
    - fetchUrl: string | undefined
    - onSuccess?: (data) => void
    - onError?: (err) => void
    - audienceOptions?: string[]
    Anti-spam:
    - honeypot field (offscreen input)
    - time-to-submit >= 3000ms
*/

const ContactForm = ({
    action,
    fetchUrl,
    onSuccess,
    onError,
    audienceOptions = [],
    thresholdMs = 3000,
    className = ""
}) => {
    const formStartRef = useRef(Date.now());
    const [status, setStatus] = useState("idle"); // idle | ok | error | spam
    const { 
        register, 
        handleSubmit,
        reset, 
        formState: { isSubmitting },
    } = useForm({
        mode: "onSubmit",
        shouldUseNativeValidation: true,
    });

    const onSubmit = async (data, event) => {
        // Anti-spam
        const elapsed = Date.now() - formStartRef.current;
        if (data.website || elapsed < thresholdMs) {
            setStatus("spam");
            return;
        }

        if (action) {
            const formEl = event?.target;
            if (formEl && formEl instanceof HTMLFormElement) {
                const hidden = document.createElement("input");
                hidden.type = "hidden";
                hidden.name = "_elapsed";
                hidden.value = String(elapsed);
                formEl.appendChild(hidden);
                formEl.submit();
            }
            return;
        }

        if (fetchUrl) {
            try {
                const res = await fetch(fetchUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                });
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                setStatus("ok");
                reset();
                onSuccess?.(data);
            } catch (err) {
                setStatus("error");
                onError?.(err);
            }
            return;
        }

        // Pretend ok if no status (testing/dev mode only, remove this before build)
        setStatus("ok");
        reset();
    };

    return (
        <form
            className={`contact ${className}`}
            onSubmit={handleSubmit(onSubmit)}
            action="https://usebasin.com/f/4da2cdee83ad"
            method="POST"
            encType="multipart/form-data"
            id="form"
            noValidate
        >
            {/* Honeypot: visible only to bots */}
            <div className="hp" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
            </div>
            
            <div className="grid">
                <div className="field">
                    <label htmlFor="name">Name<span aria-hidden="true"> *</span></label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Jane Doe"
                        {...register("name", { required: "Please enter your name." })}
                        aria-required="true"
                    />
                </div>

                <div className="field">
                    <label htmlFor="org">Organization</label>
                    <input id="org" type="text" placeholder="Your Organization" {...register("org")} />
                </div>

                <div className="field">
                    <label htmlFor="email">Email<span aria-hidden="true"> *</span></label>
                    <input
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

                <div className="field">
                    <label htmlFor="audience">Audience</label>
                    <select id="audience" defaultValue="" {...register("audience")}>
                        {audienceOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt[0].toUpperCase() + opt.slice(1)}</option>
                        ))}
                    </select>
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