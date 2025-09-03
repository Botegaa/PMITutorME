export default function BorderPalette() {
  return (
    <article className="clrs-border">
      <h4>Border Colors</h4>
      <div className="bor bor-default">
        <h5>Default</h5>
        <span style={{ border: "solid 1px var(--ttm-bor-default)" }}>
          Default
        </span>
        <span style={{ border: "solid 1px var(--ttm-bor-default-2nd)" }}>
          Secondary
        </span>
        <span style={{ border: "solid 1px var(--ttm-bor-default-3rd)" }}>
          Tertiary
        </span>
      </div>
      <div className="bor bor-neutral">
        <h5>Neutral</h5>
        <span style={{ border: "solid 1px var(--ttm-bor-neutral)" }}>Default</span>
        <span style={{ border: "solid 1px var(--ttm-bor-neutral-2nd)" }}>
          Secondary
        </span>
        <span style={{ border: "solid 1px var(--ttm-bor-neutral-3rd)" }}>
          Tertiary
        </span>
      </div>
      <div className="bor bor-main">
        <h5>Main</h5>
        <span style={{ border: "solid 1px var(--ttm-bor-main)" }}>Default</span>
        <span style={{ border: "solid 1px var(--ttm-bor-main-2nd)" }}>
          Secondary
        </span>
        <span style={{ border: "solid 1px var(--ttm-bor-main-3rd)" }}>
          Tertiary
        </span>
      </div>
      <div className="bor bor-accent">
        <h5>Accent</h5>
        <span style={{ border: "solid 1px var(--ttm-bor-accent)" }}>Default</span>
        <span style={{ border: "solid 1px var(--ttm-bor-accent-2nd)" }}>
          Secondary
        </span>
        <span style={{ border: "solid 1px var(--ttm-bor-accent-3rd)" }}>
          Tertiary
        </span>
      </div>
      <div className="bor bor-danger">
        <h5>Danger</h5>
        <span style={{ border: "solid 1px var(--ttm-bor-danger)" }}>Default</span>
        <span style={{ border: "solid 1px var(--ttm-bor-danger-2nd)" }}>
          Secondary
        </span>
        <span style={{ border: "solid 1px var(--ttm-bor-danger-3rd)" }}>
          Tertiary
        </span>
      </div>
      <div className="bor bor-success">
        <h5>Success</h5>
        <span style={{ border: "solid 1px var(--ttm-bor-success)" }}>
          Default
        </span>
        <span style={{ border: "solid 1px var(--ttm-bor-success-2nd)" }}>
          Secondary
        </span>
        <span style={{ border: "solid 1px var(--ttm-bor-success-3rd)" }}>
          Tertiary
        </span>
      </div>
      <div className="bor bor-warning">
        <h5>Warning</h5>
        <span style={{ border: "solid 1px var(--ttm-bor-warn)" }}>Default</span>
        <span style={{ border: "solid 1px var(--ttm-bor-warn-2nd)" }}>
          Secondary
        </span>
        <span style={{ border: "solid 1px var(--ttm-bor-warn-3rd)" }}>
          Tertiary
        </span>
      </div>
      <div className="bor bor-disabled">
        <h5>Disabled</h5>
        <span style={{ border: "solid 1px var(--ttm-bor-disabled)" }}>
          Default
        </span>
      </div>
    </article>
  );
}
