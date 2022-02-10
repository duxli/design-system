import { Component, Prop, h } from '@stencil/core';

export type DuxliButtonVariant = 'outlined' | 'filled' | 'minimal' | 'icon';

@Component({
  tag: 'duxli-button',
  styleUrl: 'duxli-button.scss',
  shadow: true,
})
export class DuxliButton extends HTMLButtonElement {
  /**
   * Variant for the button.
   * @default 'outlined'
   */
  @Prop() variant: DuxliButtonVariant;

  render() {
    return (
      <button>
        <slot />
      </button>
    );
  }
}
