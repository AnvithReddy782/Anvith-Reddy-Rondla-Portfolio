import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#070807",
          backgroundImage:
            "radial-gradient(circle at 18% 8%, rgba(246,181,58,0.16), transparent 420px), radial-gradient(circle at 82% 16%, rgba(55,214,194,0.12), transparent 360px), linear-gradient(135deg, #070807 0%, #11140F 100%)",
          padding: "60px 80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(to right, rgba(243,241,234,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(243,241,234,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "16px",
            letterSpacing: "2px",
            color: "#B7B3A7",
            fontFamily: "monospace",
            marginBottom: "60px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#37D6C2",
            }}
          />
          OPEN TO OPPORTUNITIES
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "96px",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-2px",
            color: "#F3F1EA",
            marginBottom: "30px",
          }}
        >
          <span>Anvith Reddy</span>
          <span style={{ color: "#F6B53A" }}>Rondla</span>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "32px",
            color: "#B7B3A7",
            marginBottom: "50px",
          }}
        >
          Product Manager and Systems Builder
        </div>

        <div style={{ display: "flex", gap: "60px", marginTop: "auto" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "42px", fontWeight: 700, color: "#F6B53A" }}>
              3
            </span>
            <span
              style={{
                fontSize: "13px",
                letterSpacing: "1px",
                color: "#817C70",
                fontFamily: "monospace",
              }}
            >
              PRODUCTS
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "42px", fontWeight: 700, color: "#F6B53A" }}>
              2
            </span>
            <span
              style={{
                fontSize: "13px",
                letterSpacing: "1px",
                color: "#817C70",
                fontFamily: "monospace",
              }}
            >
              STATES
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "42px", fontWeight: 700, color: "#F6B53A" }}>
              20M+
            </span>
            <span
              style={{
                fontSize: "13px",
                letterSpacing: "1px",
                color: "#817C70",
                fontFamily: "monospace",
              }}
            >
              RECORDS
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "42px", fontWeight: 700, color: "#37D6C2" }}>
              ₹0
            </span>
            <span
              style={{
                fontSize: "13px",
                letterSpacing: "1px",
                color: "#817C70",
                fontFamily: "monospace",
              }}
            >
              INFRA COST
            </span>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: "60px",
            right: "80px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "14px",
            color: "#B7B3A7",
            fontFamily: "monospace",
            letterSpacing: "1px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "6px",
              backgroundColor: "#F6B53A",
              color: "#070807",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: "20px",
            }}
          >
            A
          </div>
          anvith.dev
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "20px",
            backgroundColor: "#F6B53A",
            display: "flex",
          }}
        >
          <div style={{ width: "320px", backgroundColor: "#37D6C2" }} />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
