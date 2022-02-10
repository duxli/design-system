import { newSpecPage } from '@stencil/core/testing';
import { DuxliButton } from './duxli-button';

describe('duxli-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [DuxliButton],
      html: '<duxli-button></duxli-button>',
    });
    expect(root).toEqualHtml(`
      <duxli-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </duxli-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [DuxliButton],
      html: `<duxli-button first="Stencil" last="'Don't call me a framework' JS"></duxli-button>`,
    });
    expect(root).toEqualHtml(`
      <duxli-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </duxli-button>
    `);
  });
});
