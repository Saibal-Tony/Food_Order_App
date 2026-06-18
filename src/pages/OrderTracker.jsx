import React, { useEffect, useState } from "react";
import { ORDER_STEPS, STEP_PROGRESS, STEP_ETA } from "../data/menuData";

export default function OrderTracker({ orderItems, orderId, onBack }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(0);
    const intervals = [];
    // Advance step at 4s, 8s, 12s
    [4000, 8000, 12000].forEach((delay, i) => {
      const t = setTimeout(() => setStep(i + 1), delay);
      intervals.push(t);
    });
    return () => intervals.forEach(clearTimeout);
  }, [orderId]);

  const orderTotal = orderItems.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className="tracker-page">
      <button className="back-btn" onClick={onBack}>
        ← Back to menu
      </button>

      <div className="tracker-card">
        <h2>Live Order Tracking</h2>
        <p className="order-id">
          Order <span>#{orderId}</span>
        </p>

        {/* Steps */}
        <div className="steps">
          {ORDER_STEPS.map((s, i) => (
            <div className="step" key={i}>
              <div className="step-left">
                <div
                  className={`step-dot${i < step ? " done" : i === step ? " active" : ""}`}
                >
                  {i <= step ? s.emoji : "○"}
                </div>
                {i < ORDER_STEPS.length - 1 && (
                  <div className={`step-line${i < step ? " done" : ""}`} />
                )}
              </div>
              <div className="step-content">
                <h3 style={{ color: i <= step ? "var(--text)" : "var(--muted)" }}>
                  {s.label}
                </h3>
                <p>{s.desc}</p>
                {i === step && s.time && (
                  <div className="step-time">⏱ {s.time}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ETA bar */}
        <div className="eta-bar">
          <div className="eta-bar-top">
            <span className="eta-label">Estimated Arrival</span>
            <span className="eta-value">{STEP_ETA[step]}</span>
          </div>
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${STEP_PROGRESS[step]}%` }}
            />
          </div>
        </div>

        {/* Order summary */}
        <div className="tracker-items">
          <h4>Your Order</h4>
          {orderItems.map((item) => (
            <div className="tracker-row" key={item.id}>
              <span>
                {item.emoji} {item.name} × {item.qty}
              </span>
              <span>${(item.price * item.qty).toFixed(2)}</span>
            </div>
          ))}
          <div className="tracker-row tracker-total-row">
            <span>Total</span>
            <span>${orderTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
