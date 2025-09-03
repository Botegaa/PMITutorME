import { InlineIcon } from "@iconify/react";

import "@/styles/DesignSystem/ColorPalette/examplePalette.css";

export default function ExamplePalette() {
  return (
    <article className="ex-palette">
      <h4>Examples</h4>
      <div>
        <h5>Default</h5>
        <span className="ex ex-df">
          Default
          <InlineIcon
            className="ex-icon"
            icon="ic:baseline-error-outline"
            color="var(--ttm-ic-on-default)"
          />
        </span>
        <span className="ex df-2nd">
          Default
          <InlineIcon
            className="ex-icon"
            icon="ic:baseline-error-outline"
            color="var(--ttm-ic-on-default)"
          />
        </span>
        <span className="ex df-3rd">
          Default
          <InlineIcon
            className="ex-icon"
            icon="ic:baseline-error-outline"
            color="var(--ttm-ic-on-default)"
          />
        </span>
      </div>
      <div>
        <h5>Neutral</h5>
        <span className="ex ex-neutral">
          Default
          <InlineIcon
            className="ex-icon"
            icon="ic:baseline-error-outline"
            color="var(--ttm-ic-on-neutral)"
          />
        </span>
        <span className="ex neutral-2nd">
          Secondary
          <InlineIcon
            className="ex-icon"
            icon="ic:baseline-error-outline"
            color="var(--ttm-ic-on-neutral-2nd)"
          />
        </span>
        <span className="ex neutral-3rd">
          Terciary
          <InlineIcon
            className="ex-icon"
            icon="ic:baseline-error-outline"
            color="var(--ttm-ic-on-neutral-3rd)"
          />
        </span>
      </div>
      <div>
        <h5>Main</h5>
        <span className="ex ex-main">
          Default
          <InlineIcon
            className="ex-icon"
            icon="ic:baseline-error-outline"
            color="var(--ttm-ic-on-main)"
          />
        </span>
        <span className="ex main-2nd">
          Secondary
          <InlineIcon
            className="ex-icon"
            icon="ic:baseline-error-outline"
            color="var(--ttm-ic-on-main-2nd)"
          />
        </span>
        <span className="ex ex-main main-3rd">
          Terciary
          <InlineIcon
            className="ex-icon"
            icon="ic:baseline-error-outline"
            color="var(--ttm-ic-on-main-3rd)"
          />
        </span>
      </div>
      <div>
        <h5>Accent</h5>
        <span className="ex ex-accent">
          Default
          <InlineIcon
            className="ex-icon"
            icon="ic:baseline-error-outline"
            color="var(--ttm-ic-on-accent)"
          />
        </span>
        <span className="ex accent-2nd">
          Secondary
          <InlineIcon
            className="ex-icon"
            icon="ic:baseline-error-outline"
            color="var(--ttm-ic-on-accent-2nd)"
          />
        </span>
        <span className="ex accent-3rd">
          Terciary
          <InlineIcon
            className="ex-icon"
            icon="ic:baseline-error-outline"
            color="var(--ttm-ic-on-accent-3rd)"
          />
        </span>{" "}
      </div>
      <div>
        <h5>Danger</h5>
        <span className="ex ex-danger">
          Default
          <InlineIcon
            className="ex-icon"
            icon="ic:baseline-error-outline"
            color="var(--ttm-ic-on-danger)"
          />
        </span>
        <span className="ex danger-2nd">
          Secondary
          <InlineIcon
            className="ex-icon"
            icon="ic:baseline-error-outline"
            color="var(--ttm-ic-on-danger-2nd)"
          />
        </span>
        <span className="ex danger-3rd">
          Terciary
          <InlineIcon
            className="ex-icon"
            icon="ic:baseline-error-outline"
            color="var(--ttm-ic-on-danger-3rd)"
          />
        </span>{" "}
      </div>
      <div>
        <h5>Success</h5>
        <span className="ex ex-success">
          Default
          <InlineIcon
            className="ex-icon"
            icon="ic:baseline-error-outline"
            color="var(--ttm-ic-on-success)"
          />
        </span>
        <span className="ex success-2nd">
          Secondary
          <InlineIcon
            className="ex-icon"
            icon="ic:baseline-error-outline"
            color="var(--ttm-ic-on-success-2nd)"
          />
        </span>
        <span className="ex success-3rd">
          Terciary
          <InlineIcon
            className="ex-icon"
            icon="ic:baseline-error-outline"
            color="var(--ttm-ic-on-success-3rd)"
          />
        </span>{" "}
      </div>
      <div>
        <h5>Warning</h5>
        <span className="ex ex-warn">
          Default
          <InlineIcon
            className="ex-icon"
            icon="ic:baseline-error-outline"
            color="var(--ttm-ic-on-warn)"
          />
        </span>
        <span className="ex warn-2nd">
          Secondary
          <InlineIcon
            className="ex-icon"
            icon="ic:baseline-error-outline"
            color="var(--ttm-ic-on-warn-2nd)"
          />
        </span>
        <span className="ex warn-3rd">
          Terciary
          <InlineIcon
            className="ex-icon"
            icon="ic:baseline-error-outline"
            color="var(--ttm-ic-on-warn-3rd)"
          />
        </span>{" "}
      </div>
      <div>
        <h5>Disabled</h5>
        <span className="ex ex-disabled">
          Default
          <InlineIcon
            className="ex-icon"
            icon="ic:baseline-error-outline"
            color="var(--ttm-ic-on-disabled)"
          />
        </span>
      </div>
    </article>
  );
}
