export default function TxtPalette() {
  return (
    <article className="clrs-text">
      <h4>Text Colors</h4>
      <div className="txt txt-default">
        <h5>Default</h5>
        <span style={{ color: "var(--ttm-txt-default)" }}>Default</span>
        <span style={{ color: "var(--ttm-txt-default-2nd)" }}>Secondary</span>
        <span style={{ color: "var(--ttm-txt-default-3rd)" }}>Tertiary</span>
      </div>
      <div className="txt txt-neutral">
        <h5>Neutral</h5>
        <span style={{ color: "var(--ttm-txt-neutral)" }}>Default</span>
        <span style={{ color: "var(--ttm-txt-neutral-2nd)" }}>Secondary</span>
        <span style={{ color: "var(--ttm-txt-neutral-3rd)" }}>Tertiary</span>
        <span style={{ color: "var(--ttm-txt-on-neutral)" }}>On Default</span>
        <span style={{ color: "var(--ttm-txt-on-neutral-2nd)" }}>On Secondary</span>
        <span style={{ color: "var(--ttm-txt-on-neutral-3rd)" }}>On Tertiary</span>
      </div>
      <div className="txt txt-main">
        <h5>Main</h5>
        <span style={{ color: "var(--ttm-txt-main)" }}>Default</span>
        <span style={{ color: "var(--ttm-txt-main-2nd)" }}>Secondary</span>
        <span style={{ color: "var(--ttm-txt-main-3rd)" }}>Tertiary</span>
        <span style={{ color: "var(--ttm-txt-on-main)" }}>On Default</span>
        <span style={{ color: "var(--ttm-txt-on-main-2nd)" }}>On Secondary</span>
        <span style={{ color: "var(--ttm-txt-on-main-3rd)" }}>On Tertiary</span>
      </div>
      <div className="txt txt-accent">
        <h5>Accent</h5>
        <span style={{ color: "var(--ttm-txt-accent)" }}>Default</span>
        <span style={{ color: "var(--ttm-txt-accent-2nd)" }}>Secondary</span>
        <span style={{ color: "var(--ttm-txt-accent-3rd)" }}>Tertiary</span>
        <span style={{ color: "var(--ttm-txt-on-accent)" }}>On Default</span>
        <span style={{ color: "var(--ttm-txt-on-accent-2nd)" }}>
          On Secondary
        </span>
        <span style={{ color: "var(--ttm-txt-on-accent-3rd)" }}>
          On Tertiary
        </span>
      </div>
      <div className="txt txt-danger">
        <h5>Danger</h5>
        <span style={{ color: "var(--ttm-txt-danger)" }}>Default</span>
        <span style={{ color: "var(--ttm-txt-danger-2nd)" }}>Secondary</span>
        <span style={{ color: "var(--ttm-txt-danger-3rd)" }}>Tertiary</span>
        <span style={{ color: "var(--ttm-txt-on-danger)" }}>On Default</span>
        <span style={{ color: "var(--ttm-txt-on-danger-2nd)" }}>
          On Secondary
        </span>
        <span style={{ color: "var(--ttm-txt-on-danger-3rd)" }}>
          On Tertiary
        </span>
      </div>
      <div className="txt txt-success">
        <h5>Success</h5>
        <span style={{ color: "var(--ttm-txt-success)" }}>Default</span>
        <span style={{ color: "var(--ttm-txt-success-2nd)" }}>Secondary</span>
        <span style={{ color: "var(--ttm-txt-success-3rd)" }}>Tertiary</span>
        <span style={{ color: "var(--ttm-txt-on-success)" }}>On Default</span>
        <span style={{ color: "var(--ttm-txt-on-success-2nd)" }}>
          On Secondary
        </span>
        <span style={{ color: "var(--ttm-txt-on-success-3rd)" }}>
          On Tertiary
        </span>
      </div>
      <div className="txt txt-warning">
        <h5>Warning</h5>
        <span style={{ color: "var(--ttm-txt-warn)" }}>Default</span>
        <span style={{ color: "var(--ttm-txt-warn-2nd)" }}>Secondary</span>
        <span style={{ color: "var(--ttm-txt-warn-3rd)" }}>Tertiary</span>
        <span style={{ color: "var(--ttm-txt-on-warn)" }}>On Default</span>
        <span style={{ color: "var(--ttm-txt-on-warn-2nd)" }}>On Secondary</span>
        <span style={{ color: "var(--ttm-txt-on-warn-3rd)" }}>On Tertiary</span>
      </div>
      <div className="txt txt-disabled">
        <h5>Disabled</h5>
        <span style={{ color: "var(--ttm-txt-disabled)" }}>Default</span>
        <span style={{ color: "var(--ttm-txt-on-disabled)" }}>On Default</span>
      </div>
    </article>
  );
}
