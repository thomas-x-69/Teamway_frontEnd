const BlogPost = ({ title, date, image, excerpt }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden relative z-10">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-2">{date}</p>
      <p className="text-gray-700">{excerpt}</p>
    </div>
  </div>
);

export default BlogPost;
