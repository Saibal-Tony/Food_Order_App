import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

const STEPS = [
  {
    label: "Order Placed",
    desc: "We received your order",
    emoji: "✅",
    time: "Just now",
  },
  {
    label: "Preparing",
    desc: "Chef is cooking your food",
    emoji: "👨‍🍳",
    time: "~10 min",
  },
  {
    label: "Out for Delivery",
    desc: "Rider is on the way",
    emoji: "🛵",
    time: "~15 min",
  },
  { label: "Delivered", desc: "Enjoy your meal!", emoji: "🎉", time: "" },
];

const PROGRESS = [10, 40, 75, 100];
const ETA = ["35 min", "25 min", "10 min", "Delivered!"];

export default function OrderTracker({ orderItems, orderId, onBack }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= STEPS.length - 1) return;
    const t = setTimeout(() => setStep((s) => s + 1), 4000);
    return () => clearTimeout(t);
  }, [step]);

  return (
    <div className="tracker-page">
      <button className="tracker-back" onClick={onBack}>
        <ArrowLeft size={14} /> Back to menu
      </button>

      <div className="tracker-card">
        <h2>Live Order Tracking</h2>
        <p className="order-id">
          Order <span>#{orderId}</span>
        </p>

        <div className="steps">
          {STEPS.map((s, i) => (
            <div key={i} className="step">
              <div className="step-left">
                <div
                  className={`step-dot ${i < step ? "done" : i === step ? "active" : ""}`}
                >
                  {i <= step ? s.emoji : "○"}
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`step-line ${i < step ? "done" : ""}`} />
                )}
              </div>
              <div className="step-content">
                <h3
                  style={{ color: i <= step ? "var(--text)" : "var(--muted)" }}
                >
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

        <div className="eta-bar">
          <div className="eta-bar-top">
            <span className="eta-label">Estimated Arrival</span>
            <span className="eta-val">{ETA[step]}</span>
          </div>
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${PROGRESS[step]}%` }}
            />
          </div>
        </div>

        <div className="tracker-items">
          <h4>Your Order</h4>
          {orderItems.map((item) => (
            <div className="tracker-item-row" key={item.id}>
              <span>
                {item.emoji} {item.name} × {item.qty}
              </span>
              <span>${(item.price * item.qty).toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
