"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Tag, Share2, Bookmark, ThumbsUp, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"

// Sample blog posts data
const blogPosts = [
  {
    slug: "building-scalable-real-time-applications-with-websockets",
    title: "Building Scalable Real-time Applications with WebSockets",
    excerpt:
      "Learn how to implement efficient real-time communication systems using WebSockets, Socket.io, and modern web technologies for high-performance applications.",
    content: `
      <h2>Introduction to WebSockets</h2>
      <p>WebSockets provide a persistent connection between a client and server, allowing for real-time data transfer in both directions. Unlike HTTP, which is unidirectional and stateless, WebSockets enable a more interactive experience by maintaining an open connection.</p>
      
      <p>In this article, we'll explore how to build scalable real-time applications using WebSockets, focusing on best practices and performance optimization techniques.</p>
      
      <h2>Why Use WebSockets?</h2>
      <p>Traditional HTTP requests are great for most web applications, but they have limitations when it comes to real-time functionality:</p>
      <ul>
        <li>HTTP connections are not persistent, requiring new connections for each request</li>
        <li>Server cannot push data to clients without a client request first</li>
        <li>Overhead of HTTP headers in each request</li>
      </ul>
      
      <p>WebSockets solve these problems by establishing a persistent, low-latency connection that allows bidirectional communication.</p>
      
      <h2>Setting Up WebSockets with Socket.io</h2>
      <p>Socket.io is a popular library that provides a reliable WebSocket implementation with fallbacks for older browsers. Here's how to set it up with a Node.js server:</p>
      
      <pre><code>
      // Server setup
      const express = require('express');
      const http = require('http');
      const { Server } = require('socket.io');
      
      const app = express();
      const server = http.createServer(app);
      const io = new Server(server);
      
      io.on('connection', (socket) => {
        console.log('A user connected');
        
        socket.on('message', (data) => {
          // Broadcast to all clients
          io.emit('message', data);
        });
        
        socket.on('disconnect', () => {
          console.log('User disconnected');
        });
      });
      
      server.listen(3000, () => {
        console.log('Server listening on port 3000');
      });
      </code></pre>
      
      <p>On the client side:</p>
      
      <pre><code>
      // Client setup
      import { io } from 'socket.io-client';
      
      const socket = io('http://localhost:3000');
      
      // Send a message
      function sendMessage(message) {
        socket.emit('message', message);
      }
      
      // Receive messages
      socket.on('message', (data) => {
        console.log('Received message:', data);
        // Update UI with the new message
      });
      </code></pre>
      
      <h2>Scaling WebSocket Applications</h2>
      <p>As your application grows, you'll need to consider how to scale your WebSocket infrastructure. Here are some strategies:</p>
      
      <h3>1. Horizontal Scaling with Redis Adapter</h3>
      <p>When running multiple server instances, you need a way for them to communicate. Socket.io provides a Redis adapter that allows messages to be broadcast across all instances:</p>
      
      <pre><code>
      const { createAdapter } = require('@socket.io/redis-adapter');
      const { createClient } = require('redis');
      
      const pubClient = createClient({ url: 'redis://localhost:6379' });
      const subClient = pubClient.duplicate();
      
      Promise.all([pubClient.connect(), subClient.connect()]).then(() => {
        io.adapter(createAdapter(pubClient, subClient));
        server.listen(3000);
      });
      </code></pre>
      
      <h3>2. Load Balancing</h3>
      <p>Implement sticky sessions in your load balancer to ensure that a client's WebSocket connection always goes to the same server instance.</p>
      
      <h3>3. Connection Pooling</h3>
      <p>Limit the number of connections per server and implement connection pooling to efficiently manage resources.</p>
      
      <h2>Performance Optimization</h2>
      <p>To ensure your WebSocket application performs well at scale:</p>
      
      <h3>Message Batching</h3>
      <p>Instead of sending many small messages, batch them together when possible to reduce overhead.</p>
      
      <h3>Binary Data</h3>
      <p>Use binary data formats like Protocol Buffers or MessagePack instead of JSON for more efficient data transfer.</p>
      
      <h3>Heartbeats and Timeouts</h3>
      <p>Implement heartbeat mechanisms to detect disconnected clients and clean up resources.</p>
      
      <h2>Security Considerations</h2>
      <p>WebSockets require special attention to security:</p>
      <ul>
        <li>Implement proper authentication before establishing WebSocket connections</li>
        <li>Validate all incoming messages</li>
        <li>Use WSS (WebSocket Secure) instead of WS</li>
        <li>Implement rate limiting to prevent abuse</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>WebSockets provide a powerful way to build real-time applications with bidirectional communication. By following the best practices outlined in this article, you can create scalable, high-performance applications that provide an excellent user experience.</p>
      
      <p>In future articles, we'll explore more advanced topics like implementing presence indicators, typing notifications, and handling offline synchronization in WebSocket applications.</p>
    `,
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["WebSockets", "Real-time", "Node.js", "React"],
    author: {
      name: "Harsh Patel",
      role: "Software Engineer",
      image: "/placeholder.svg?height=100&width=100",
    },
  },
  {
    slug: "optimizing-react-native-performance-best-practices",
    title: "Optimizing React Native Performance: Best Practices",
    excerpt:
      "Discover advanced techniques for improving React Native app performance, including memory management, rendering optimizations, and native module integration.",
    content: `
      <h2>Introduction</h2>
      <p>React Native has revolutionized mobile app development by allowing developers to build cross-platform applications using JavaScript. However, as applications grow in complexity, performance issues can arise. In this article, we'll explore advanced techniques for optimizing React Native performance.</p>
      
      <h2>Understanding React Native's Architecture</h2>
      <p>Before diving into optimizations, it's important to understand how React Native works under the hood. React Native uses a bridge to communicate between JavaScript and native code. This bridge can become a bottleneck if not managed properly.</p>
      
      <h2>Key Performance Metrics</h2>
      <p>When optimizing React Native apps, focus on these key metrics:</p>
      <ul>
        <li>JavaScript thread FPS (frames per second)</li>
        <li>UI thread FPS</li>
        <li>App startup time</li>
        <li>Memory usage</li>
        <li>Bundle size</li>
      </ul>
      
      <h2>Rendering Optimizations</h2>
      
      <h3>1. Use React.memo for Component Memoization</h3>
      <p>Prevent unnecessary re-renders by memoizing components:</p>
      
      <pre><code>
      const MyComponent = React.memo(({ data }) => {
        // Component logic
        return (
          <View>
            <Text>{data.title}</Text>
          </View>
        );
      });
      </code></pre>
      
      <h3>2. Optimize List Rendering</h3>
      <p>When working with lists, use FlatList or SectionList instead of mapping over arrays in your render method:</p>
      
      <pre><code>
      <FlatList
        data={items}
        renderItem={({ item }) => <ItemComponent item={item} />}
        keyExtractor={item => item.id}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
        removeClippedSubviews={true}
      />
      </code></pre>
      
      <h3>3. Use PureComponent for Class Components</h3>
      <p>If you're still using class components, extend PureComponent instead of Component to get shallow prop and state comparison:</p>
      
      <pre><code>
      class MyComponent extends React.PureComponent {
        render() {
          return (
            <View>
              <Text>{this.props.title}</Text>
            </View>
          );
        }
      }
      </code></pre>
      
      <h2>State Management Optimizations</h2>
      
      <h3>1. Use Context API Efficiently</h3>
      <p>Split your context into smaller, more focused contexts to prevent unnecessary re-renders:</p>
      
      <pre><code>
      // Instead of one large context
      const AppContext = React.createContext();
      
      // Use multiple focused contexts
      const UserContext = React.createContext();
      const ThemeContext = React.createContext();
      const NavigationContext = React.createContext();
      </code></pre>
      
      <h3>2. Optimize Redux Usage</h3>
      <p>If you're using Redux, make sure to:</p>
      <ul>
        <li>Use selectors with memoization (reselect)</li>
        <li>Connect components to only the state they need</li>
        <li>Consider using Redux Toolkit for better performance</li>
      </ul>
      
      <h2>JavaScript Thread Optimizations</h2>
      
      <h3>1. Move Heavy Computations to Native Modules</h3>
      <p>For computationally intensive tasks, consider writing native modules:</p>
      
      <pre><code>
      // Native module in Java (Android)
      public class HeavyComputationModule extends ReactContextBaseJavaModule {
        @ReactMethod
        public void performComputation(ReadableMap data, Promise promise) {
          // Perform heavy computation
          // ...
          promise.resolve(result);
        }
      }
      
      // Usage in JavaScript
      import { NativeModules } from 'react-native';
      const { HeavyComputationModule } = NativeModules;
      
      async function compute() {
        try {
          const result = await HeavyComputationModule.performComputation(data);
          // Use result
        } catch (error) {
          console.error(error);
        }
      }
      </code></pre>
      
      <h3>2. Use Web Workers for Background Tasks</h3>
      <p>Offload heavy JavaScript operations to a background thread using Web Workers:</p>
      
      <pre><code>
      // worker.js
      self.onmessage = (event) => {
        const { data } = event;
        // Perform heavy computation
        const result = heavyComputation(data);
        self.postMessage(result);
      };
      
      // Main thread
      const worker = new Worker('./worker.js');
      worker.onmessage = (event) => {
        const result = event.data;
        // Update UI with result
      };
      worker.postMessage(data);
      </code></pre>
      
      <h2>Memory Management</h2>
      
      <h3>1. Clean Up Event Listeners and Subscriptions</h3>
      <p>Always remove event listeners and subscriptions when components unmount:</p>
      
      <pre><code>
      useEffect(() => {
        const subscription = someAPI.subscribe(handleEvent);
        
        return () => {
          subscription.unsubscribe();
        };
      }, []);
      </code></pre>
      
      <h3>2. Avoid Memory Leaks in Closures</h3>
      <p>Be careful with closures that capture large objects:</p>
      
      <pre><code>
      // Bad: Captures the entire props object
      const handleClick = () => {
        someFunction(props);
      };
      
      // Good: Only captures what's needed
      const handleClick = () => {
        someFunction(props.id, props.name);
      };
      </code></pre>
      
      <h2>Image Optimizations</h2>
      
      <h3>1. Use FastImage Instead of Image</h3>
      <p>FastImage provides better performance for image loading and caching:</p>
      
      <pre><code>
      import FastImage from 'react-native-fast-image';
      
      <FastImage
        style={{ width: 200, height: 200 }}
        source={{
          uri: 'https://example.com/image.jpg',
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      </code></pre>
      
      <h3>2. Implement Progressive Loading</h3>
      <p>Load low-resolution thumbnails first, then high-resolution images:</p>
      
      <pre><code>
      const ProgressiveImage = ({ thumbnailSource, source, style, ...props }) => {
        const [isLoaded, setIsLoaded] = useState(false);
        
        return (
          <View style={style}>
            <Image
              source={thumbnailSource}
              style={[style, { opacity: isLoaded ? 0 : 1 }]}
              blurRadius={2}
              {...props}
            />
            <Image
              source={source}
              style={[style, { opacity: isLoaded ? 1 : 0 }, StyleSheet.absoluteFill]}
              onLoad={() => setIsLoaded(true)}
              {...props}
            />
          </View>
        );
      };
      </code></pre>
      
      <h2>Network Optimizations</h2>
      
      <h3>1. Implement Request Batching</h3>
      <p>Batch multiple API requests together to reduce network overhead.</p>
      
      <h3>2. Use GraphQL for Efficient Data Fetching</h3>
      <p>GraphQL allows you to request exactly the data you need, reducing payload size.</p>
      
      <h2>Monitoring and Profiling</h2>
      
      <h3>1. Use the React Native Performance Monitor</h3>
      <p>Enable the performance monitor to track FPS and identify bottlenecks:</p>
      
      <pre><code>
      import { PerformanceMonitor } from 'react-native';
      
      PerformanceMonitor.startMeasuring();
      </code></pre>
      
      <h3>2. Implement Analytics for Real-World Performance</h3>
      <p>Use tools like Firebase Performance Monitoring to track real-world performance metrics.</p>
      
      <h2>Conclusion</h2>
      <p>Optimizing React Native performance requires a multi-faceted approach, addressing rendering, state management, JavaScript execution, memory usage, and network operations. By implementing these best practices, you can create React Native applications that are fast, responsive, and provide an excellent user experience across different devices.</p>
      
      <p>Remember that optimization should be data-driven. Always measure performance before and after making changes to ensure your optimizations are actually improving the user experience.</p>
    `,
    date: "2024-01-10",
    readTime: "12 min read",
    tags: ["React Native", "Performance", "Mobile", "Optimization"],
    author: {
      name: "Harsh Patel",
      role: "Software Engineer",
      image: "/placeholder.svg?height=100&width=100",
    },
  },
]

export default function BlogDetailPage() {
  const params = useParams()
  const { slug } = params

  // Find the blog post with the matching slug
  const post = blogPosts.find((post) => post.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-black to-emerald-950 py-20 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Post Not Found</h1>
          <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link href="/blog">
            <Button
              variant="outline"
              className="border-2 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 px-6 py-2 rounded-xl font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-black to-emerald-950 py-20 px-4">
      <div className="max-w-4xl mx-auto pt-20">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/blog">
            <Button variant="ghost" className="text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300 -ml-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>

          <div className="flex flex-wrap items-center text-gray-400 text-sm mb-6 gap-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-emerald-600/20 text-emerald-300 rounded-full text-sm border border-emerald-500/30 flex items-center"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>

          {/* Author Info */}
          <div className="flex items-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-700/50 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              HP
            </div>
            <div>
              <div className="font-bold text-white">{post.author.name}</div>
              <div className="text-emerald-400 text-sm">{post.author.role}</div>
            </div>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/30 mb-8"
        >
          <div
            className="prose prose-invert prose-emerald max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              color: "#e5e7eb",
              lineHeight: "1.7",
            }}
          />
        </motion.div>

        {/* Article Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400"
            >
              <ThumbsUp className="mr-2 h-4 w-4" />
              Like Article
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="border-teal-500/50 text-teal-400 hover:bg-teal-500/10 hover:border-teal-400"
            >
              <Bookmark className="mr-2 h-4 w-4" />
              Save for Later
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share Article
            </Button>
          </motion.div>
        </motion.div>

        {/* Related Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter((p) => p.slug !== slug)
              .slice(0, 2)
              .map((relatedPost, index) => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/30 hover:border-emerald-500/30 transition-all duration-300 group cursor-pointer"
                  >
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">{relatedPost.excerpt}</p>
                    <div className="flex items-center text-emerald-400 text-sm font-medium group-hover:text-emerald-300 transition-colors duration-300">
                      <span>Read Article</span>
                      <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </motion.div>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
