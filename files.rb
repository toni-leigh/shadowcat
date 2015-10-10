def react_class(key)
  classified = key.split('-').collect(&:capitalize).join
  "var #{classified} = React.createClass({\n  render: function() {\n    return (\n      \n    )\n  }\n});"
end

def sass(key)
  ".#{key} {\n\n}"
end

def js_path(folder, key)
  "src/#{folder}/#{key}/#{key}.js"
end

def sass_path(folder, key)
  "src/#{folder}/#{key}/_#{key}.scss"
end

# [
#   'service',
#   'project',
#   'blog',
#   'blog-post'
# ].each do |f|
#   Dir.mkdir("src/pages/#{f}")
#   js_file = File.new(js_path('pages',f),'w')
#   js_file.puts(react_class(f))
#   js_file.close
#   sass_file = File.new(sass_path('pages',f),'w')
#   sass_file.puts(sass(f))
#   sass_file.close
# end

[
  'navigation',
  'heading',
  'video-spotlight',
  'text',
  'aside',
  'video',
  'testimonials',
  'image-fixed',
  'button-pair',
  'choice-projects',
  'call-to-action',
  'blog-small',
  'contact',
  'footer',
  'thumbnail-gallery',
  'lightbox'
].each do |f|
  Dir.mkdir("src/sections/#{f}")
  js_file = File.new(js_path('sections',f),'w')
  js_file.puts(react_class(f))
  js_file.close
  sass_file = File.new(sass_path('sections',f),'w')
  sass_file.puts(sass(f))
  sass_file.close
end

[
  'logo',
  'page-heading',
  'bread-crumbs',
  'key-value-detail',
  'section-heading-simple',
  'section-heading-with-strapline',
  'button-large',
  'button-small',
  'button-cta',
  'button-submit',
  'input-text',
  'input-textarea',
  'contact-detail',
  'map',
  'aside-panel',
  'image-thumbnail'
].each do |f|
  Dir.mkdir("src/modules/#{f}")
  js_file = File.new(js_path('modules',f),'w')
  js_file.puts(react_class(f))
  js_file.close
  sass_file = File.new(sass_path('modules',f),'w')
  sass_file.puts(sass(f))
  sass_file.close
end


