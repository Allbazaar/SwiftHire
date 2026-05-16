import { useState } from "react"
import { supabase } from "./lib/supabase"

export default function App() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!email) return
    setLoading(true)
    try {
      await supabase
        .from("waitlist")
        .insert([{ email, created_at: new Date() }])
      setSubmitted(true)
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#FAF9F7",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Inter, sans-serif",
      padding: "20px"
    }}>

      {/* Logo */}
      <div style={{
        background: "#1A3C6E",
        color: "#fff",
        padding: "10px 24px",
        borderRadius: "10px",
        fontSize: "22px",
        fontWeight: "600",
        marginBottom: "28px",
        letterSpacing: "-0.5px"
      }}>
        SwiftHire
      </div>

      {/* Headline */}
      <h1 style={{
        fontSize: "28px",
        fontWeight: "600",
        color: "#1A3C6E",
        textAlign: "center",
        maxWidth: "480px",
        lineHeight: "1.3",
        margin: "0 0 14px"
      }}>
        Where Ghanaian careers begin
      </h1>

      {/* Subheading */}
      <p style={{
        fontSize: "15px",
        color: "#6B7280",
        textAlign: "center",
        maxWidth: "400px",
        lineHeight: "1.6",
        margin: "0 0 36px"
      }}>
        SwiftHire connects students, graduates, and organisations 
        through structured opportunities — built specifically for Ghana.
      </p>

      {/* Email signup */}
      {!submitted ? (
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",
          maxWidth: "360px"
        }}>
          <input
            type="email"
            placeholder="Enter your email to get early access"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "13px 16px",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              fontSize: "14px",
              outline: "none",
              background: "#fff",
              color: "#1C1C1E"
            }}
          />
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              padding: "13px",
              borderRadius: "8px",
              background: loading ? "#93C5FD" : "#0F9E7B",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "500",
              border: "none",
              cursor: loading ? "not-allowed" : "pointer"
            }}
          >
            {loading ? "Saving..." : "Get early access"}
          </button>
        </div>
      ) : (
        <div style={{
          background: "#E1F5EE",
          color: "#0F6E56",
          padding: "14px 24px",
          borderRadius: "10px",
          fontSize: "14px",
          fontWeight: "500",
          textAlign: "center"
        }}>
          ✓ You are on the list. We will be in touch soon.
        </div>
      )}

      {/* Footer */}
      <p style={{
        marginTop: "48px",
        fontSize: "12px",
        color: "#9CA3AF"
      }}>
        © 2025 SwiftHire · Built for Ghana
      </p>

    </div>
  )
}