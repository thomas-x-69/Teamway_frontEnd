import { useState, useEffect } from "react";
import BlogPost from "../components/BlogPost";
import Pagination from "../components/Pagination";
import { blogPosts, carouselItems } from "../components/mockData";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  const postsPerPage = 6;

  const categories = [
    "الكل",
    "خدمة العملاء",
    "مركز خدمة العملاء",
    "وكيل مبيعات",
    "أخبار",
    "تقنية",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCarouselIndex(
        (prevIndex) => (prevIndex + 1) % carouselItems.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (activeCategory === "الكل" || post.category === activeCategory)
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div
      dir="rtl"
      className="min-h-screen flex flex-col bg-[#ECEFFA] relative z-10"
    >
      <main className="flex-grow container mx-auto px-[4rem] py-8">
        <div className="mb-8 bg-green-500 text-white rounded-lg overflow-hidden">
          <img
            src={carouselItems[currentCarouselIndex].image}
            alt={carouselItems[currentCarouselIndex].title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              {carouselItems[currentCarouselIndex].title}
            </h2>
            <p>{carouselItems[currentCarouselIndex].description}</p>
            <button className="mt-4 bg-white text-green-500 px-4 py-2 rounded">
              طلب التجربة
            </button>
          </div>
        </div>

        <div className="mb-8">
          <input
            type="text"
            placeholder="البحث"
            className="w-full p-2 border rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded ${
                activeCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <BlogPost key={post.id} {...post} />
          ))}
        </div>

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={filteredPosts.length}
          paginate={setCurrentPage}
          currentPage={currentPage}
        />
      </main>
    </div>
  );
};

export default BlogPage;
