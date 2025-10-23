import React, { useEffect, useState, useRef } from 'react';

const SpotlightLayer = () => {
    const [spotlight, setSpotlight] = useState(null);
    const [hoveredElement, setHoveredElement] = useState(null);
    const canvasRef = useRef(null);
    const animationFrameRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const getOrigin = () => ({
            x: window.innerWidth - 20,
            y: window.innerHeight - 20
        });

        const drawSpotlight = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (!spotlight) return;
            
            const origin = getOrigin();
            const { x: targetX, y: targetY } = spotlight;
            const dx = targetX - origin.x;
            const dy = targetY - origin.y;
            const angle = Math.atan2(dy, dx);
            const spotlightRadius = 110;

            ctx.save();

            const gradient = ctx.createLinearGradient(origin.x, origin.y, targetX, targetY);
            gradient.addColorStop(0, 'rgba(255, 255, 200, 0.5)');
            gradient.addColorStop(0.7, 'rgba(255, 255, 220, 0.3)');
            gradient.addColorStop(1, 'rgba(255, 255, 240, 0)');

            ctx.beginPath();
            ctx.moveTo(origin.x, origin.y);
            
            const endOffset1X = targetX + Math.cos(angle + Math.PI / 2) * spotlightRadius;
            const endOffset1Y = targetY + Math.sin(angle + Math.PI / 2) * spotlightRadius;

            ctx.lineTo(endOffset1X, endOffset1Y);
            ctx.arc(targetX, targetY, spotlightRadius, angle + Math.PI / 2, angle - Math.PI / 2);
            ctx.lineTo(origin.x, origin.y);
            ctx.closePath();

            ctx.fillStyle = gradient;
            ctx.fill();

            // Inner spotlight glow
            const glowGradient1 = ctx.createRadialGradient(targetX, targetY, 0, targetX, targetY, spotlightRadius * 0.4);
            glowGradient1.addColorStop(0, 'rgba(255, 255, 220, 0.6)');
            glowGradient1.addColorStop(1, 'rgba(255, 255, 220, 0)');
            
            ctx.fillStyle = glowGradient1;
            ctx.beginPath();
            ctx.arc(targetX, targetY, spotlightRadius * 0.4, 0, Math.PI * 2);
            ctx.fill();

            const glowGradient2 = ctx.createRadialGradient(targetX, targetY, 0, targetX, targetY, spotlightRadius);
            glowGradient2.addColorStop(0, 'rgba(255, 255, 200, 0.3)');
            glowGradient2.addColorStop(0.5, 'rgba(255, 255, 220, 0.15)');
            glowGradient2.addColorStop(1, 'rgba(255, 255, 240, 0)');
            
            ctx.fillStyle = glowGradient2;
            ctx.beginPath();
            ctx.arc(targetX, targetY, spotlightRadius, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        };

        const animate = () => {
            drawSpotlight();
            animationFrameRef.current = requestAnimationFrame(animate);
        };
        animate();

        const handleMouseEnter = (e) => {
            const rect = e.target.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
        
            setSpotlight({ x: centerX, y: centerY, element: e.target });
            setHoveredElement(e.target);
        
            const applySpotlightStyles = (element) => {
                if (!element.dataset.spotlightOriginalColor) {
                    const computed = getComputedStyle(element);
                    element.dataset.spotlightOriginalColor = computed.color;
                }
                element.style.color = '#000';
            };
        
            applySpotlightStyles(e.target);
            e.target.querySelectorAll('*').forEach(applySpotlightStyles);
        };

        const handleMouseLeave = (e) => {
            setSpotlight(null);
            setHoveredElement(null);
            
            const restoreStyles = (element) => {
                if (element.dataset.spotlightOriginalColor !== undefined) {
                        element.style.color = element.dataset.spotlightOriginalColor;
                        delete element.dataset.spotlightOriginalColor;
                }
            };
                
            restoreStyles(e.target);
            e.target.querySelectorAll('*').forEach(restoreStyles);
        };

        const spotlightElements = document.querySelectorAll('[data-spotlight]');
        spotlightElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', (e) => handleMouseLeave(e));
        });

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            spotlightElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', (e) => handleMouseLeave(e));
            });
        };
    }, [spotlight, hoveredElement]);

    return (
        <canvas ref={canvasRef} className="spotlight-layer" />
    );
};

export default SpotlightLayer;