require 'rack/contrib/try_static'
require 'rack/contrib/not_found'
require 'rack/rewrite'

use Rack::Deflater

use Rack::TryStatic,
  urls: %w[/],
  root: "_site",
  try: ['index.html', '/index.html'],
  header_rules: [
    [["html"],  {'Content-Type' => 'text/html; charset=utf-8'}],
    [["css"],   {'Content-Type' => 'text/css'}],
    [["js"],    {'Content-Type' => 'text/javascript'}],
    [["png"],   {'Content-Type' => 'image/png'}],
    [["svg"],   {'Content-Type' => 'image/svg+xml'}],
    [["jpg"],   {'Content-Type' => 'image/jpg'}],
    [["ico"],   {'Content-Type' => 'image/x-icon'}],
    [:fonts, {'Access-Control-Allow-Origin' => '*'}],
    ["/", {'Cache-Control' => 'public, max-age=86400'}],
  ]

run Rack::NotFound.new('_site/404.html')

use Rack::Rewrite do
  r301 %r{^/florida-web-design?$}, '/web-design-agency-florida/'
  r301 %r{^/goodies?$}, '/blog/'
  r301 %r{^/blog/category/goodies/?$}, '/blog/'
  r301 %r{^/blog/hero/?$}, '/blog/boost-brand-loyalty-heroes/'
  r301 %r{^/blog/flickr-picasa-facebook-dropbox?$}, '/blog/flickr-vs-picasa-vs-facebook-vs-dropbox/'
  r301 %r{^/blog/fc-webicons-set-launched?$}, '/blog/fc-webicons-set-launched/'
  r301 %r{^/blog/2012/06/14/fc-webicons-set-launched.html?$}, '/blog/fc-webicons-set-launched/'
  r301 %r{^/blog/2012-06-14-fc-webicons-set-launched/?$}, '/blog/fc-webicons-set-launched/'
  r301 %r{^/blog/more-isnt-always-better?$}, '/blog/right-budget-for-your-business/'
end
