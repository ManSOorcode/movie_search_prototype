import Footer from "../component/footer/Footer";
import Main from "../component/main/Main";
import Header from "../component/navigate/Header";

const Layout = () => {
  return (
    <div className="flex flex-col max-w-full min-h-screen p-0 text-gray-200 bg-gray-800">
      {/* Header */}
      <Header />
      {/* Main */}
      <main className="flex-grow">
        <Main />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
