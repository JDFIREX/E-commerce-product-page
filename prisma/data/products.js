const products = [
  {
    "title": "Product 1",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id sem tristique metus pellentesque egestas. Quisque semper augue auctor ex fringilla elementum et sed dui. Praesent et mattis purus, a faucibus tellus. Integer consectetur, augue quis sodales porta, nibh massa imperdiet nisi, at porttitor neque tellus eget sem. In rutrum ullamcorper dolor nec luctus. Aliquam commodo lectus sed hendrerit laoreet. Morbi pretium, eros egestas suscipit semper, velit augue sagittis erat, quis mattis arcu lectus vel nisi. Aliquam venenatis diam id massa porta ultricies. Integer a dolor vitae metus vehicula finibus ac in justo.",
    "price": 199.99,
    "collection": "MAN",
    "available": 5
  },
  {
    "title": "Product 2",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id sem tristique metus pellentesque egestas. Quisque semper augue auctor ex fringilla elementum et sed dui. Praesent et mattis purus, a faucibus tellus. Integer consectetur, augue quis sodales porta, nibh massa imperdiet nisi, at porttitor neque tellus eget sem. In rutrum ullamcorper dolor nec luctus. Aliquam commodo lectus sed hendrerit laoreet. Morbi pretium, eros egestas suscipit semper, velit augue sagittis erat, quis mattis arcu lectus vel nisi. Aliquam venenatis diam id massa porta ultricies. Integer a dolor vitae metus vehicula finibus ac in justo.",
    "price": 123.99,
    "collection": "MAN",
    "available": 1
  },
  {
    "title": "Product 3",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id sem tristique metus pellentesque egestas. Quisque semper augue auctor ex fringilla elementum et sed dui. Praesent et mattis purus, a faucibus tellus. Integer consectetur, augue quis sodales porta, nibh massa imperdiet nisi, at porttitor neque tellus eget sem. In rutrum ullamcorper dolor nec luctus. Aliquam commodo lectus sed hendrerit laoreet. Morbi pretium, eros egestas suscipit semper, velit augue sagittis erat, quis mattis arcu lectus vel nisi. Aliquam venenatis diam id massa porta ultricies. Integer a dolor vitae metus vehicula finibus ac in justo.",
    "price": 99.99,
    "collection": "MAN",
    "available": 15
  },
  {
    "title": "Product 4",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id sem tristique metus pellentesque egestas. Quisque semper augue auctor ex fringilla elementum et sed dui. Praesent et mattis purus, a faucibus tellus. Integer consectetur, augue quis sodales porta, nibh massa imperdiet nisi, at porttitor neque tellus eget sem. In rutrum ullamcorper dolor nec luctus. Aliquam commodo lectus sed hendrerit laoreet. Morbi pretium, eros egestas suscipit semper, velit augue sagittis erat, quis mattis arcu lectus vel nisi. Aliquam venenatis diam id massa porta ultricies. Integer a dolor vitae metus vehicula finibus ac in justo.",
    "price": 199.99,
    "collection": "MAN",
    "available": 0
  },
  {
    "title": "Product 5",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id sem tristique metus pellentesque egestas. Quisque semper augue auctor ex fringilla elementum et sed dui. Praesent et mattis purus, a faucibus tellus. Integer consectetur, augue quis sodales porta, nibh massa imperdiet nisi, at porttitor neque tellus eget sem. In rutrum ullamcorper dolor nec luctus. Aliquam commodo lectus sed hendrerit laoreet. Morbi pretium, eros egestas suscipit semper, velit augue sagittis erat, quis mattis arcu lectus vel nisi. Aliquam venenatis diam id massa porta ultricies. Integer a dolor vitae metus vehicula finibus ac in justo.",
    "price": 399.99,
    "collection": "MAN",
    "available": 2
  },
  {
    "title": "Product 6",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id sem tristique metus pellentesque egestas. Quisque semper augue auctor ex fringilla elementum et sed dui. Praesent et mattis purus, a faucibus tellus. Integer consectetur, augue quis sodales porta, nibh massa imperdiet nisi, at porttitor neque tellus eget sem. In rutrum ullamcorper dolor nec luctus. Aliquam commodo lectus sed hendrerit laoreet. Morbi pretium, eros egestas suscipit semper, velit augue sagittis erat, quis mattis arcu lectus vel nisi. Aliquam venenatis diam id massa porta ultricies. Integer a dolor vitae metus vehicula finibus ac in justo.",
    "price": 135.99,
    "collection": "MAN",
    "available": 9
  },
  {
    "title": "Product 7",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id sem tristique metus pellentesque egestas. Quisque semper augue auctor ex fringilla elementum et sed dui. Praesent et mattis purus, a faucibus tellus. Integer consectetur, augue quis sodales porta, nibh massa imperdiet nisi, at porttitor neque tellus eget sem. In rutrum ullamcorper dolor nec luctus. Aliquam commodo lectus sed hendrerit laoreet. Morbi pretium, eros egestas suscipit semper, velit augue sagittis erat, quis mattis arcu lectus vel nisi. Aliquam venenatis diam id massa porta ultricies. Integer a dolor vitae metus vehicula finibus ac in justo.",
    "price": 176.99,
    "collection": "MAN",
    "available": 5
  },
  {
    "title": "Product 8",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id sem tristique metus pellentesque egestas. Quisque semper augue auctor ex fringilla elementum et sed dui. Praesent et mattis purus, a faucibus tellus. Integer consectetur, augue quis sodales porta, nibh massa imperdiet nisi, at porttitor neque tellus eget sem. In rutrum ullamcorper dolor nec luctus. Aliquam commodo lectus sed hendrerit laoreet. Morbi pretium, eros egestas suscipit semper, velit augue sagittis erat, quis mattis arcu lectus vel nisi. Aliquam venenatis diam id massa porta ultricies. Integer a dolor vitae metus vehicula finibus ac in justo.",
    "price": 199.99,
    "collection": "WOMAN",
    "available": 5
  },
  {
    "title": "Product 9",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id sem tristique metus pellentesque egestas. Quisque semper augue auctor ex fringilla elementum et sed dui. Praesent et mattis purus, a faucibus tellus. Integer consectetur, augue quis sodales porta, nibh massa imperdiet nisi, at porttitor neque tellus eget sem. In rutrum ullamcorper dolor nec luctus. Aliquam commodo lectus sed hendrerit laoreet. Morbi pretium, eros egestas suscipit semper, velit augue sagittis erat, quis mattis arcu lectus vel nisi. Aliquam venenatis diam id massa porta ultricies. Integer a dolor vitae metus vehicula finibus ac in justo.",
    "price": 123.99,
    "collection": "WOMAN",
    "available": 1
  },
  {
    "title": "Product 10",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id sem tristique metus pellentesque egestas. Quisque semper augue auctor ex fringilla elementum et sed dui. Praesent et mattis purus, a faucibus tellus. Integer consectetur, augue quis sodales porta, nibh massa imperdiet nisi, at porttitor neque tellus eget sem. In rutrum ullamcorper dolor nec luctus. Aliquam commodo lectus sed hendrerit laoreet. Morbi pretium, eros egestas suscipit semper, velit augue sagittis erat, quis mattis arcu lectus vel nisi. Aliquam venenatis diam id massa porta ultricies. Integer a dolor vitae metus vehicula finibus ac in justo.",
    "price": 99.99,
    "collection": "WOMAN",
    "available": 15
  },
  {
    "title": "Product 11",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id sem tristique metus pellentesque egestas. Quisque semper augue auctor ex fringilla elementum et sed dui. Praesent et mattis purus, a faucibus tellus. Integer consectetur, augue quis sodales porta, nibh massa imperdiet nisi, at porttitor neque tellus eget sem. In rutrum ullamcorper dolor nec luctus. Aliquam commodo lectus sed hendrerit laoreet. Morbi pretium, eros egestas suscipit semper, velit augue sagittis erat, quis mattis arcu lectus vel nisi. Aliquam venenatis diam id massa porta ultricies. Integer a dolor vitae metus vehicula finibus ac in justo.",
    "price": 199.99,
    "collection": "WOMAN",
    "available": 0
  },
  {
    "title": "Product 12",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id sem tristique metus pellentesque egestas. Quisque semper augue auctor ex fringilla elementum et sed dui. Praesent et mattis purus, a faucibus tellus. Integer consectetur, augue quis sodales porta, nibh massa imperdiet nisi, at porttitor neque tellus eget sem. In rutrum ullamcorper dolor nec luctus. Aliquam commodo lectus sed hendrerit laoreet. Morbi pretium, eros egestas suscipit semper, velit augue sagittis erat, quis mattis arcu lectus vel nisi. Aliquam venenatis diam id massa porta ultricies. Integer a dolor vitae metus vehicula finibus ac in justo.",
    "price": 399.99,
    "collection": "WOMAN",
    "available": 2
  },
  {
    "title": "Product 13",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id sem tristique metus pellentesque egestas. Quisque semper augue auctor ex fringilla elementum et sed dui. Praesent et mattis purus, a faucibus tellus. Integer consectetur, augue quis sodales porta, nibh massa imperdiet nisi, at porttitor neque tellus eget sem. In rutrum ullamcorper dolor nec luctus. Aliquam commodo lectus sed hendrerit laoreet. Morbi pretium, eros egestas suscipit semper, velit augue sagittis erat, quis mattis arcu lectus vel nisi. Aliquam venenatis diam id massa porta ultricies. Integer a dolor vitae metus vehicula finibus ac in justo.",
    "price": 135.99,
    "collection": "WOMAN",
    "available": 9
  },
  {
    "title": "Product 14",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id sem tristique metus pellentesque egestas. Quisque semper augue auctor ex fringilla elementum et sed dui. Praesent et mattis purus, a faucibus tellus. Integer consectetur, augue quis sodales porta, nibh massa imperdiet nisi, at porttitor neque tellus eget sem. In rutrum ullamcorper dolor nec luctus. Aliquam commodo lectus sed hendrerit laoreet. Morbi pretium, eros egestas suscipit semper, velit augue sagittis erat, quis mattis arcu lectus vel nisi. Aliquam venenatis diam id massa porta ultricies. Integer a dolor vitae metus vehicula finibus ac in justo.",
    "price": 176.99,
    "collection": "WOMAN",
    "available": 5
  }
]

module.exports = products