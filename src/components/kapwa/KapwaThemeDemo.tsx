import React from 'react';

interface KapwaThemeDemoProps {
  className?: string;
}

const KapwaThemeDemo: React.FC<KapwaThemeDemoProps> = ({ className = '' }) => {
  return (
    <div className={`kapwa-theme-demo ${className}`}>
      {/* Color Palette Showcase */}
      <section className='mb-12'>
        <h2 className='text-3xl font-bold kapwa-text-brand-700 mb-6'>
          Kapwa Design System - Colors
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {/* Brand Colors */}
          <div>
            <h3 className='text-lg font-semibold kapwa-text-gray-800 mb-4'>
              Brand Colors
            </h3>
            <div className='space-y-2'>
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
                shade => (
                  <div key={shade} className='flex items-center gap-3'>
                    <div
                      className={`w-8 h-8 rounded border kapwa-border-gray-200 kapwa-bg-brand-${shade}`}
                      style={{
                        backgroundColor: `var(--color-kapwa-brand-${shade})`,
                      }}
                    ></div>
                    <div>
                      <p className='text-sm font-medium kapwa-text-gray-800'>
                        Brand {shade}
                      </p>
                      <p className='text-xs kapwa-text-gray-600'>
                        kapwa-bg-brand-{shade}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold kapwa-text-gray-800 mb-4'>
              Red Colors
            </h3>
            <div className='space-y-2'>
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
                shade => (
                  <div key={shade} className='flex items-center gap-3'>
                    <div
                      className={`w-8 h-8 rounded border kapwa-border-gray-200 kapwa-bg-red-${shade}`}
                    ></div>
                    <div>
                      <p className='text-sm font-medium kapwa-text-gray-800'>
                        Red {shade}
                      </p>
                      <p className='text-xs kapwa-text-gray-600'>
                        kapwa-bg-red-{shade}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold kapwa-text-gray-800 mb-4'>
              Green Colors
            </h3>
            <div className='space-y-2'>
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
                shade => (
                  <div key={shade} className='flex items-center gap-3'>
                    <div
                      className={`w-8 h-8 rounded border kapwa-border-gray-200 kapwa-bg-green-${shade}`}
                    ></div>
                    <div>
                      <p className='text-sm font-medium kapwa-text-gray-800'>
                        Green {shade}
                      </p>
                      <p className='text-xs kapwa-text-gray-600'>
                        kapwa-bg-green-{shade}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold kapwa-text-gray-800 mb-4'>
              Yellow Colors
            </h3>
            <div className='space-y-2'>
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
                shade => (
                  <div key={shade} className='flex items-center gap-3'>
                    <div
                      className={`w-8 h-8 rounded border kapwa-border-gray-200 kapwa-bg-yellow-${shade}`}
                    ></div>
                    <div>
                      <p className='text-sm font-medium kapwa-text-gray-800'>
                        Yellow {shade}
                      </p>
                      <p className='text-xs kapwa-text-gray-600'>
                        kapwa-bg-yellow-{shade}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold kapwa-text-gray-800 mb-4'>
              Orange Colors
            </h3>
            <div className='space-y-2'>
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
                shade => (
                  <div key={shade} className='flex items-center gap-3'>
                    <div
                      className={`w-8 h-8 rounded border kapwa-border-gray-200 kapwa-bg-orange-${shade}`}
                    ></div>
                    <div>
                      <p className='text-sm font-medium kapwa-text-gray-800'>
                        Orange {shade}
                      </p>
                      <p className='text-xs kapwa-text-gray-600'>
                        kapwa-bg-orange-{shade}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold kapwa-text-gray-800 mb-4'>
              Purple Colors
            </h3>
            <div className='space-y-2'>
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
                shade => (
                  <div key={shade} className='flex items-center gap-3'>
                    <div
                      className={`w-8 h-8 rounded border kapwa-border-gray-200 kapwa-bg-purple-${shade}`}
                    ></div>
                    <div>
                      <p className='text-sm font-medium kapwa-text-gray-800'>
                        Purple {shade}
                      </p>
                      <p className='text-xs kapwa-text-gray-600'>
                        kapwa-bg-purple-{shade}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold kapwa-text-gray-800 mb-4'>
              Blue Colors
            </h3>
            <div className='space-y-2'>
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
                shade => (
                  <div key={shade} className='flex items-center gap-3'>
                    <div
                      className={`w-8 h-8 rounded border kapwa-border-gray-200 kapwa-bg-blue-${shade}`}
                    ></div>
                    <div>
                      <p className='text-sm font-medium kapwa-text-gray-800'>
                        Blue {shade}
                      </p>
                      <p className='text-xs kapwa-text-gray-600'>
                        kapwa-bg-blue-{shade}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold kapwa-text-gray-800 mb-4'>
              Gray Colors
            </h3>
            <div className='space-y-2'>
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
                shade => (
                  <div key={shade} className='flex items-center gap-3'>
                    <div
                      className={`w-8 h-8 rounded border kapwa-border-gray-200 kapwa-bg-gray-${shade}`}
                    ></div>
                    <div>
                      <p className='text-sm font-medium kapwa-text-gray-800'>
                        Gray {shade}
                      </p>
                      <p className='text-xs kapwa-text-gray-600'>
                        kapwa-bg-gray-{shade}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold kapwa-text-gray-800 mb-4'>
              Neutral Colors
            </h3>
            <div className='space-y-2'>
              {[50, 100, 200, 300].map(shade => (
                <div key={shade} className='flex items-center gap-3'>
                  <div
                    className={`w-8 h-8 rounded border kapwa-border-gray-200 kapwa-bg-neutral-${shade}`}
                  ></div>
                  <div>
                    <p className='text-sm font-medium kapwa-text-gray-800'>
                      Neutral {shade}
                    </p>
                    <p className='text-xs kapwa-text-gray-600'>
                      kapwa-bg-neutral-{shade}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Semantic Colors Showcase */}
      <section className='mb-12'>
        <h2 className='text-3xl font-bold kapwa-text-brand-700 mb-6'>
          Kapwa Design System - Semantic Colors
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {/* Text Semantic Colors */}
          <div>
            <h3 className='text-lg font-semibold kapwa-text-gray-800 mb-4'>
              Text Colors
            </h3>
            <div className='space-y-2'>
              {[
                {
                  name: 'Strong',
                  var: '--color-kapwa-text-strong',
                  class: 'kapwa-text-strong',
                  maps: 'Gray/950',
                },
                {
                  name: 'Support',
                  var: '--color-kapwa-text-support',
                  class: 'kapwa-text-support',
                  maps: 'Gray/700',
                },
                {
                  name: 'Disabled',
                  var: '--color-kapwa-text-disabled',
                  class: 'kapwa-text-disabled',
                  maps: 'Gray/500',
                },
                {
                  name: 'On Disabled',
                  var: '--color-kapwa-text-on-disabled',
                  class: 'kapwa-text-on-disabled',
                  maps: 'Gray/600',
                },
                {
                  name: 'Inverse',
                  var: '--color-kapwa-text-inverse',
                  class: 'kapwa-text-inverse',
                  maps: 'Neutral/50',
                },
                {
                  name: 'Inverse Subtle',
                  var: '--color-kapwa-text-inverse-subtle',
                  class: 'kapwa-text-inverse-subtle',
                  maps: 'Gray/400',
                },
                {
                  name: 'Link',
                  var: '--color-kapwa-text-link',
                  class: 'kapwa-text-link',
                  maps: 'Blue/500',
                },
                {
                  name: 'Link Hover',
                  var: '--color-kapwa-text-link-hover',
                  class: 'kapwa-text-link-hover',
                  maps: 'Blue/600',
                },
                {
                  name: 'Link Visited',
                  var: '--color-kapwa-text-link-visited',
                  class: 'kapwa-text-link-visited',
                  maps: 'Blue/700',
                },
                {
                  name: 'Brand',
                  var: '--color-kapwa-text-brand',
                  class: 'kapwa-text-brand',
                  maps: 'Brand/600',
                },
                {
                  name: 'Brand Bold',
                  var: '--color-kapwa-text-brand-bold',
                  class: 'kapwa-text-brand-bold',
                  maps: 'Brand/950',
                },
                {
                  name: 'Success',
                  var: '--color-kapwa-text-success',
                  class: 'kapwa-text-success',
                  maps: 'Green/600',
                },
                {
                  name: 'Danger',
                  var: '--color-kapwa-text-danger',
                  class: 'kapwa-text-danger',
                  maps: 'Red/600',
                },
                {
                  name: 'Warning',
                  var: '--color-kapwa-text-warning',
                  class: 'kapwa-text-warning',
                  maps: 'Orange/600',
                },
                {
                  name: 'Info',
                  var: '--color-kapwa-text-info',
                  class: 'kapwa-text-info',
                  maps: 'Blue/600',
                },
              ].map(color => (
                <div key={color.name} className='flex items-center gap-3'>
                  <div
                    className='w-8 h-8 rounded border kapwa-border-gray-200'
                    style={{ backgroundColor: `var(${color.var})` }}
                  ></div>
                  <div className='flex-1 min-w-0'>
                    <p className='text-sm font-medium kapwa-text-gray-800 truncate'>
                      {color.name}
                    </p>
                    <p className='text-xs kapwa-text-gray-600 truncate'>
                      {color.class}
                    </p>
                    <p className='text-xs kapwa-text-gray-500 truncate'>
                      {color.maps}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Background Semantic Colors */}
          <div>
            <h3 className='text-lg font-semibold kapwa-text-gray-800 mb-4'>
              Background Colors
            </h3>
            <div className='space-y-2'>
              {[
                {
                  name: 'Surface',
                  var: '--color-kapwa-bg-surface',
                  class: 'kapwa-bg-surface',
                  maps: 'Neutral/50',
                },
                {
                  name: 'Surface Raised',
                  var: '--color-kapwa-bg-surface-raised',
                  class: 'kapwa-bg-surface-raised',
                  maps: 'Gray/50',
                },
                {
                  name: 'Surface Brand',
                  var: '--color-kapwa-bg-surface-brand',
                  class: 'kapwa-bg-surface-brand',
                  maps: 'Brand/100',
                },
                {
                  name: 'Surface Bold',
                  var: '--color-kapwa-bg-surface-bold',
                  class: 'kapwa-bg-surface-bold',
                  maps: 'Gray/950',
                },
                {
                  name: 'Surface Adaptive',
                  var: '--color-kapwa-bg-surface-adaptive',
                  class: 'kapwa-bg-surface-adaptive',
                  maps: 'Neutral/100',
                },
                {
                  name: 'Surface Brand Active',
                  var: '--color-kapwa-bg-surface-brand-active',
                  class: 'kapwa-bg-surface-brand-active',
                  maps: 'Brand/50',
                },
                {
                  name: 'Hover',
                  var: '--color-kapwa-bg-hover',
                  class: 'kapwa-bg-hover',
                  maps: 'Neutral/200',
                },
                {
                  name: 'Active',
                  var: '--color-kapwa-bg-active',
                  class: 'kapwa-bg-active',
                  maps: 'Neutral/300',
                },
                {
                  name: 'Disabled',
                  var: '--color-kapwa-bg-disabled',
                  class: 'kapwa-bg-disabled',
                  maps: 'Neutral/300',
                },
                {
                  name: 'Focus',
                  var: '--color-kapwa-bg-focus',
                  class: 'kapwa-bg-focus',
                  maps: 'Yellow/500',
                },
                {
                  name: 'Overlay',
                  var: '--color-kapwa-bg-overlay',
                  class: 'kapwa-bg-overlay',
                  maps: 'Custom',
                },
              ].map(color => (
                <div key={color.name} className='flex items-center gap-3'>
                  <div
                    className='w-8 h-8 rounded border kapwa-border-gray-200'
                    style={{ backgroundColor: `var(${color.var})` }}
                  ></div>
                  <div className='flex-1 min-w-0'>
                    <p className='text-sm font-medium kapwa-text-gray-800 truncate'>
                      {color.name}
                    </p>
                    <p className='text-xs kapwa-text-gray-600 truncate'>
                      {color.class}
                    </p>
                    <p className='text-xs kapwa-text-gray-500 truncate'>
                      {color.maps}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Brand Background Colors */}
          <div>
            <h3 className='text-lg font-semibold kapwa-text-gray-800 mb-4'>
              Brand Backgrounds
            </h3>
            <div className='space-y-2'>
              {[
                {
                  name: 'Brand Default',
                  var: '--color-kapwa-bg-brand-default',
                  class: 'kapwa-bg-brand-default',
                  maps: 'Brand/600',
                },
                {
                  name: 'Brand Hover',
                  var: '--color-kapwa-bg-brand-hover',
                  class: 'kapwa-bg-brand-hover',
                  maps: 'Brand/700',
                },
                {
                  name: 'Brand Active',
                  var: '--color-kapwa-bg-brand-active',
                  class: 'kapwa-bg-brand-active',
                  maps: 'Brand/800',
                },
                {
                  name: 'Brand Weak',
                  var: '--color-kapwa-bg-brand-weak',
                  class: 'kapwa-bg-brand-weak',
                  maps: 'Brand/50',
                },
              ].map(color => (
                <div key={color.name} className='flex items-center gap-3'>
                  <div
                    className='w-8 h-8 rounded border kapwa-border-gray-200'
                    style={{ backgroundColor: `var(${color.var})` }}
                  ></div>
                  <div className='flex-1 min-w-0'>
                    <p className='text-sm font-medium kapwa-text-gray-800 truncate'>
                      {color.name}
                    </p>
                    <p className='text-xs kapwa-text-gray-600 truncate'>
                      {color.class}
                    </p>
                    <p className='text-xs kapwa-text-gray-500 truncate'>
                      {color.maps}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Status Background Colors */}
          <div>
            <h3 className='text-lg font-semibold kapwa-text-gray-800 mb-4'>
              Status Backgrounds
            </h3>
            <div className='space-y-2'>
              {[
                {
                  name: 'Info Default',
                  var: '--color-kapwa-bg-info-default',
                  class: 'kapwa-bg-info-default',
                  maps: 'Blue/600',
                },
                {
                  name: 'Info Hover',
                  var: '--color-kapwa-bg-info-hover',
                  class: 'kapwa-bg-info-hover',
                  maps: 'Blue/700',
                },
                {
                  name: 'Info Active',
                  var: '--color-kapwa-bg-info-active',
                  class: 'kapwa-bg-info-active',
                  maps: 'Blue/800',
                },
                {
                  name: 'Info Weak',
                  var: '--color-kapwa-bg-info-weak',
                  class: 'kapwa-bg-info-weak',
                  maps: 'Blue/50',
                },
                {
                  name: 'Danger Default',
                  var: '--color-kapwa-bg-danger-default',
                  class: 'kapwa-bg-danger-default',
                  maps: 'Red/700',
                },
                {
                  name: 'Danger Hover',
                  var: '--color-kapwa-bg-danger-hover',
                  class: 'kapwa-bg-danger-hover',
                  maps: 'Red/800',
                },
                {
                  name: 'Danger Active',
                  var: '--color-kapwa-bg-danger-active',
                  class: 'kapwa-bg-danger-active',
                  maps: 'Red/900',
                },
                {
                  name: 'Danger Weak',
                  var: '--color-kapwa-bg-danger-weak',
                  class: 'kapwa-bg-danger-weak',
                  maps: 'Red/50',
                },
                {
                  name: 'Warning Default',
                  var: '--color-kapwa-bg-warning-default',
                  class: 'kapwa-bg-warning-default',
                  maps: 'Orange/600',
                },
                {
                  name: 'Warning Hover',
                  var: '--color-kapwa-bg-warning-hover',
                  class: 'kapwa-bg-warning-hover',
                  maps: 'Orange/700',
                },
                {
                  name: 'Warning Active',
                  var: '--color-kapwa-bg-warning-active',
                  class: 'kapwa-bg-warning-active',
                  maps: 'Orange/800',
                },
                {
                  name: 'Warning Weak',
                  var: '--color-kapwa-bg-warning-weak',
                  class: 'kapwa-bg-warning-weak',
                  maps: 'Orange/50',
                },
                {
                  name: 'Success Default',
                  var: '--color-kapwa-bg-success-default',
                  class: 'kapwa-bg-success-default',
                  maps: 'Green/600',
                },
                {
                  name: 'Success Hover',
                  var: '--color-kapwa-bg-success-hover',
                  class: 'kapwa-bg-success-hover',
                  maps: 'Green/700',
                },
                {
                  name: 'Success Active',
                  var: '--color-kapwa-bg-success-active',
                  class: 'kapwa-bg-success-active',
                  maps: 'Green/800',
                },
                {
                  name: 'Success Weak',
                  var: '--color-kapwa-bg-success-weak',
                  class: 'kapwa-bg-success-weak',
                  maps: 'Green/50',
                },
                {
                  name: 'Gray Default',
                  var: '--color-kapwa-bg-gray-default',
                  class: 'kapwa-bg-gray-default',
                  maps: 'Gray/50',
                },
                {
                  name: 'Gray Hover',
                  var: '--color-kapwa-bg-gray-hover',
                  class: 'kapwa-bg-gray-hover',
                  maps: 'Gray/100',
                },
                {
                  name: 'Gray Active',
                  var: '--color-kapwa-bg-gray-active',
                  class: 'kapwa-bg-gray-active',
                  maps: 'Gray/200',
                },
                {
                  name: 'Gray Disabled',
                  var: '--color-kapwa-bg-gray-disabled',
                  class: 'kapwa-bg-gray-disabled',
                  maps: 'Gray/300',
                },
              ].map(color => (
                <div key={color.name} className='flex items-center gap-3'>
                  <div
                    className='w-8 h-8 rounded border kapwa-border-gray-200'
                    style={{ backgroundColor: `var(${color.var})` }}
                  ></div>
                  <div className='flex-1 min-w-0'>
                    <p className='text-sm font-medium kapwa-text-gray-800 truncate'>
                      {color.name}
                    </p>
                    <p className='text-xs kapwa-text-gray-600 truncate'>
                      {color.class}
                    </p>
                    <p className='text-xs kapwa-text-gray-500 truncate'>
                      {color.maps}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Border Semantic Colors */}
          <div>
            <h3 className='text-lg font-semibold kapwa-text-gray-800 mb-4'>
              Border Colors
            </h3>
            <div className='space-y-2'>
              {[
                {
                  name: 'Strong',
                  var: '--color-kapwa-border-strong',
                  class: 'kapwa-border-strong',
                  maps: 'Gray/400',
                },
                {
                  name: 'Weak',
                  var: '--color-kapwa-border-weak',
                  class: 'kapwa-border-weak',
                  maps: 'Gray/200',
                },
                {
                  name: 'Inverse',
                  var: '--color-kapwa-border-inverse',
                  class: 'kapwa-border-inverse',
                  maps: 'Gray/50',
                },
                {
                  name: 'On Disabled',
                  var: '--color-kapwa-border-on-disabled',
                  class: 'kapwa-border-on-disabled',
                  maps: 'Gray/400',
                },
                {
                  name: 'Focus',
                  var: '--color-kapwa-border-focus',
                  class: 'kapwa-border-focus',
                  maps: 'Blue/500',
                },
                {
                  name: 'Brand',
                  var: '--color-kapwa-border-brand',
                  class: 'kapwa-border-brand',
                  maps: 'Brand/600',
                },
                {
                  name: 'Success',
                  var: '--color-kapwa-border-success',
                  class: 'kapwa-border-success',
                  maps: 'Green/600',
                },
                {
                  name: 'Danger',
                  var: '--color-kapwa-border-danger',
                  class: 'kapwa-border-danger',
                  maps: 'Red/700',
                },
                {
                  name: 'Warning',
                  var: '--color-kapwa-border-warning',
                  class: 'kapwa-border-warning',
                  maps: 'Orange/600',
                },
                {
                  name: 'Info',
                  var: '--color-kapwa-border-info',
                  class: 'kapwa-border-info',
                  maps: 'Blue/600',
                },
              ].map(color => (
                <div key={color.name} className='flex items-center gap-3'>
                  <div
                    className='w-8 h-8 rounded border-2'
                    style={{
                      backgroundColor: 'white',
                      borderColor: `var(${color.var})`,
                    }}
                  ></div>
                  <div className='flex-1 min-w-0'>
                    <p className='text-sm font-medium kapwa-text-gray-800 truncate'>
                      {color.name}
                    </p>
                    <p className='text-xs kapwa-text-gray-600 truncate'>
                      {color.class}
                    </p>
                    <p className='text-xs kapwa-text-gray-500 truncate'>
                      {color.maps}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spacing & Layout Showcase */}
      <section className='mb-12'>
        <h2 className='text-3xl font-bold kapwa-text-brand-700 mb-6'>
          Kapwa Design System - Spacing & Layout
        </h2>

        <div className='space-y-6'>
          <div>
            <h3 className='text-lg font-semibold kapwa-text-gray-800 mb-4'>
              Spacing Scale
            </h3>
            <div className='space-y-2'>
              {[1, 2, 4, 6, 8, 12, 16, 20, 24, 32].map(space => (
                <div key={space} className='flex items-center gap-4'>
                  <div
                    className={`kapwa-bg-brand-500`}
                    style={{ width: `${space * 0.25}rem`, height: '1rem' }}
                  ></div>
                  <span className='text-sm kapwa-text-gray-700'>
                    spacing-{space} ({space * 0.25}rem)
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold kapwa-text-gray-800 mb-4'>
              Border Radius
            </h3>
            <div className='flex items-center gap-4 flex-wrap'>
              {[
                { name: 'none', class: 'rounded-none' },
                { name: 'sm', class: 'rounded-sm' },
                { name: 'base', class: 'rounded' },
                { name: 'md', class: 'rounded-md' },
                { name: 'lg', class: 'rounded-lg' },
                { name: 'xl', class: 'rounded-xl' },
                { name: '2xl', class: 'rounded-2xl' },
                { name: '3xl', class: 'rounded-3xl' },
                { name: 'full', class: 'rounded-full' },
              ].map(radius => (
                <div
                  key={radius.name}
                  className='flex flex-col items-center gap-2'
                >
                  <div
                    className={`w-8 h-8 kapwa-bg-brand-500 border-2 kapwa-border-brand-700 ${radius.class}`}
                  ></div>
                  <span className='text-xs kapwa-text-gray-600'>
                    {radius.class}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Typography Showcase */}
      <section className='mb-12'>
        <h2 className='text-3xl font-bold kapwa-text-brand-700 mb-6'>
          Kapwa Design System - Typography
        </h2>

        <div className='space-y-8'>
          {/* Headings */}
          <div>
            <h3 className='text-lg font-semibold kapwa-text-gray-800 mb-4'>
              Headings
            </h3>
            <div className='space-y-4'>
              {[
                {
                  class: 'heading-xl',
                  text: 'Heading XL',
                  description: '2.5rem, 700 weight, 140% line-height',
                },
                {
                  class: 'heading-lg',
                  text: 'Heading LG',
                  description: '2rem, 700 weight, 140% line-height',
                },
                {
                  class: 'heading-md',
                  text: 'Heading MD',
                  description: '1.5rem, 700 weight, 140% line-height',
                },
                {
                  class: 'heading-sm',
                  text: 'Heading SM',
                  description: '1.25rem, 700 weight, 140% line-height',
                },
              ].map(typography => (
                <div
                  key={typography.class}
                  className='border kapwa-border-gray-200 rounded-lg p-4'
                >
                  <div
                    className={`${typography.class} kapwa-text-gray-900 mb-2`}
                  >
                    {typography.text}
                  </div>
                  <div className='text-sm kapwa-text-gray-600'>
                    <span className='font-mono kapwa-bg-gray-100 px-2 py-1 rounded text-xs'>
                      .{typography.class}
                    </span>
                    <span className='ml-2'>{typography.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Body Text */}
          <div>
            <h3 className='text-lg font-semibold kapwa-text-gray-800 mb-4'>
              Body Text
            </h3>
            <div className='space-y-4'>
              {[
                {
                  class: 'body-xl-default',
                  text: 'Body XL Default',
                  description: '1.25rem, 400 weight, 140% line-height',
                },
                {
                  class: 'body-xl-strong',
                  text: 'Body XL Strong',
                  description: '1.25rem, 700 weight, 140% line-height',
                },
                {
                  class: 'body-lg-default',
                  text: 'Body LG Default',
                  description: '1.125rem, 400 weight, 140% line-height',
                },
                {
                  class: 'body-lg-strong',
                  text: 'Body LG Strong',
                  description: '1.125rem, 700 weight, 140% line-height',
                },
                {
                  class: 'body-md-default',
                  text: 'Body MD Default',
                  description: '1rem, 400 weight, 140% line-height',
                },
                {
                  class: 'body-md-strong',
                  text: 'Body MD Strong',
                  description: '1rem, 700 weight, 140% line-height',
                },
                {
                  class: 'body-sm-default',
                  text: 'Body SM Default',
                  description: '0.875rem, 400 weight, 140% line-height',
                },
                {
                  class: 'body-sm-strong',
                  text: 'Body SM Strong',
                  description: '0.875rem, 700 weight, 140% line-height',
                },
                {
                  class: 'body-xs-default',
                  text: 'Body XS Default',
                  description: '0.75rem, 400 weight, 140% line-height',
                },
                {
                  class: 'body-xs-strong',
                  text: 'Body XS Strong',
                  description: '0.775rem, 700 weight, 140% line-height',
                },
              ].map(typography => (
                <div
                  key={typography.class}
                  className='border kapwa-border-gray-200 rounded-lg p-4'
                >
                  <div
                    className={`${typography.class} kapwa-text-gray-900 mb-2`}
                  >
                    {typography.text}
                  </div>
                  <div className='text-sm kapwa-text-gray-600'>
                    <span className='font-mono kapwa-bg-gray-100 px-2 py-1 rounded text-xs'>
                      .{typography.class}
                    </span>
                    <span className='ml-2'>{typography.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Code Text */}
          <div>
            <h3 className='text-lg font-semibold text-kapwa-gray-800 mb-4'>
              Code Text
            </h3>
            <div className='space-y-4'>
              {[
                {
                  class: 'code-lg',
                  text: 'Code LG',
                  description:
                    '1.125rem, 400 weight, 140% line-height, mono font',
                },
                {
                  class: 'code-md',
                  text: 'Code MD',
                  description: '1rem, 400 weight, 140% line-height, mono font',
                },
                {
                  class: 'code-sm',
                  text: 'Code SM',
                  description:
                    '0.875rem, 400 weight, 140% line-height, mono font',
                },
              ].map(typography => (
                <div
                  key={typography.class}
                  className='border border-kapwa-gray-200 rounded-lg p-4'
                >
                  <div
                    className={`${typography.class} text-kapwa-gray-900 mb-2`}
                  >
                    {typography.text}
                  </div>
                  <div className='text-sm text-kapwa-gray-600'>
                    <span className='font-mono bg-kapwa-gray-100 px-2 py-1 rounded text-xs'>
                      .{typography.class}
                    </span>
                    <span className='ml-2'>{typography.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Labels */}
          <div>
            <h3 className='text-lg font-semibold text-kapwa-gray-800 mb-4'>
              Labels
            </h3>
            <div className='space-y-4'>
              {[
                {
                  class: 'label-lg',
                  text: 'Label LG',
                  description: '1.125rem, 700 weight, 120% line-height',
                },
                {
                  class: 'label-md',
                  text: 'Label MD',
                  description: '1rem, 700 weight, 120% line-height',
                },
                {
                  class: 'label-sm',
                  text: 'Label SM',
                  description: '0.875rem, 700 weight, 120% line-height',
                },
                {
                  class: 'label-xs',
                  text: 'Label XS',
                  description: '0.75rem, 700 weight, 120% line-height',
                },
              ].map(typography => (
                <div
                  key={typography.class}
                  className='border border-kapwa-gray-200 rounded-lg p-4'
                >
                  <div
                    className={`${typography.class} text-kapwa-gray-900 mb-2`}
                  >
                    {typography.text}
                  </div>
                  <div className='text-sm text-kapwa-gray-600'>
                    <span className='font-mono bg-kapwa-gray-100 px-2 py-1 rounded text-xs'>
                      .{typography.class}
                    </span>
                    <span className='ml-2'>{typography.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Input & Links */}
          <div>
            <h3 className='text-lg font-semibold text-kapwa-gray-800 mb-4'>
              Input & Links
            </h3>
            <div className='space-y-4'>
              {[
                {
                  class: 'input',
                  text: 'Input Text',
                  description: '1rem, 400 weight, 1.5rem line-height',
                },
                {
                  class: 'kapwa-link-lg kapwa-text-link',
                  text: 'Link LG',
                  description:
                    '1.125rem, 400 weight, 140% line-height, underlined',
                },
                {
                  class: 'kapwa-link-md kapwa-text-link',
                  text: 'Link MD',
                  description: '1rem, 400 weight, 140% line-height, underlined',
                },
                {
                  class: 'kapwa-link-sm kapwa-text-link',
                  text: 'Link SM',
                  description:
                    '0.875rem, 400 weight, 140% line-height, underlined',
                },
              ].map(typography => (
                <div
                  key={typography.class}
                  className='border border-kapwa-gray-200 rounded-lg p-4'
                >
                  <div
                    className={`${typography.class} text-kapwa-gray-900 mb-2`}
                  >
                    {typography.text}
                  </div>
                  <div className='text-sm text-kapwa-gray-600'>
                    <span className='font-mono bg-kapwa-gray-100 px-2 py-1 rounded text-xs'>
                      .{typography.class}
                    </span>
                    <span className='ml-2'>{typography.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shadow Showcase */}
      <section className='mb-12'>
        <h2 className='text-3xl font-bold text-kapwa-brand-700 mb-6'>
          Kapwa Design System - Shadows
        </h2>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {[
            {
              name: 'XS',
              var: '--shadow-kapwa-xs',
              class: 'shadow-kapwa-xs',
              value: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
            },
            {
              name: 'SM',
              var: '--shadow-kapwa-sm',
              class: 'shadow-kapwa-sm',
              value: '0px 2px 4px -1px rgba(38, 43, 43, 0.12)',
            },
            {
              name: 'Base',
              var: '--shadow-kapwa-base',
              class: 'shadow-kapwa-base',
              value: '0px 2px 8px -2px rgba(38, 43, 43, 0.2)',
            },
            {
              name: 'MD',
              var: '--shadow-kapwa-md',
              class: 'shadow-kapwa-md',
              value: '0px 2px 8px -2px rgba(38, 43, 43, 0.2)',
            },
            {
              name: 'LG',
              var: '--shadow-kapwa-lg',
              class: 'shadow-kapwa-lg',
              value:
                '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
            },
          ].map(shadow => (
            <div key={shadow.name} className='flex flex-col items-center gap-3'>
              <div
                className='w-20 h-20 bg-white rounded-lg border border-kapwa-gray-200'
                style={{
                  boxShadow: `var(${shadow.var})`,
                }}
              ></div>
              <div className='text-center'>
                <p className='text-sm font-medium text-kapwa-gray-800'>
                  {shadow.name}
                </p>
                <p className='text-xs text-kapwa-gray-600'>{shadow.class}</p>
                <p className='text-xs text-kapwa-gray-500 mt-1 max-w-32 break-words'>
                  {shadow.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default KapwaThemeDemo;
