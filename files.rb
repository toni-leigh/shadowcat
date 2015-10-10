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

[
  'service',
  'project',
  'blog',
  'blog-post'
].each do |f|
  Dir.mkdir("src/pages/#{f}")
  js_file = File.new(js_path('pages',f),'w')
  js_file.puts(react_class(f))
  js_file.close
  sass_file = File.new(sass_path('pages',f),'w')
  sass_file.puts(sass(f))
  sass_file.close
end


