import React, { useState } from "react";
// استخدمناها لتنقل بين الصفحات ولاحظ useNavigate بتكون ال from تبعتها هي router لأنها اساسا عبارة عن تنقل
import { useNavigate } from "react-router-dom";
// عمل sidebar كون على يقين انو ال sidebar هو حالة متغيرة والعادة تكمن باستخدام useState فيها
// اما تغير الحالة الي عندي هو في شغلتين:
// فتح واغلاق ال sidebar والثانية هو الانتقال بين section
const ProfilePage = () => {
  // هون القصد انو اول section مفعل عند الدخول على الصفحة هو ال personal
  const [activeSection, setActiveSection] = useState("personal");
  // هون تطبق الحالة الافتراضية وهي العادة انو يكون ال sidebar مغلق لأنو مو دائما بحاجة انو يكون مفتوح
  //  عند عرض الزر، سيتحقق التعبير الشرطي من قيمة isSidebarOpen ويجد أنها false. لذا، سيتم عرض النص "Open Menu" على الزر:
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // -----------------------------------------------------------------------
  // اقسام ال section داخل ال sidebar يتم ترتيب البيانات داخل array واعطاء كل قسم منهم:
  // id يعبر معرف لكل قسم ويكون هو ما يميز كل قسم
  // name هو اسم القسم الي رح يبين الsection
  // اخر شي الايقونة الي رح تظهر بجانب هاد ال section
  const sections = [
    { id: "personal", name: "Personal Info", icon: "👤" },
    { id: "orders", name: "My Orders", icon: "🛍️" },
    { id: "rentals", name: "My Rentals", icon: "👗" },
    { id: "favorites", name: "Favorites", icon: "❤️" },
    { id: "sizes", name: "My Sizes", icon: "📏" },
    { id: "addresses", name: "Addresses", icon: "🏠" },
    { id: "payment", name: "Payment", icon: "💳" },
  ];
  // ---------------------------------------------------------------
  //  ============ toggleSidebar ============
  // هون ال sidebar يفتح ويسكر
  const toggleSidebar = () => {
    // الفكرة انو اعمل حالة معاكسة للحالة الحالية
    setIsSidebarOpen(!isSidebarOpen);
  };
  //  =========== handleHomeNavigation =============
  // يلا نتنقل بين الصفحات بسلاسة وبساطة
  const navigate = useNavigate();
  // الحدث الاكبر من onclick تحت انو عند النقر روح ع ال home
  const handleHomeNavigation = () => {
    navigate("/");
  };
  // ============ handleLogout ============
  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Sidebar Toggle Button (visible on mobile) */}
            {/* هاد الزر موجود في حال ال response  */}
            {/* ----------------------------------------------------------------- */}
            <button
              className="md:hidden bg-[#193db0] text-white p-2 rounded-md mb-4"
              onClick={toggleSidebar}
            >
              {/* هلأ متفقين بالشرط بال class بستخدم القيمة الحالية من usestste
              هون بيحكي القيمة الافتراضية يكون الشكل مسكر بالتالي الاشي الي ظاهر هو open */}
              {/* هون اذا كانت مفتوحة بكون الشرط صحيح يعني مبين close
              واذا القائمة مسكرة بكون الشرط خاطئ بالتالي الي مبين open */}
              {isSidebarOpen ? "Close Menu" : "Open Menu"}
            </button>
            <div
              // هون حاليا عم نحكي عن شكل الشريط انو لما يكون مفتوح اعمله block يعني الشريط الجانبي يكون مرئي وياخد كامل العرض
              // ولما يكون مسكر اعمله hidden اي اخفي
              // md:block لجعل الشريط الجانبي مرئياً بشكل دائم.
              className={`md:w-1/4 bg-gray-50 p-4 ${
                isSidebarOpen ? "block" : "hidden md:block"
              }`}
            >
              {/* --------------------------------------------------------------------------- */}
              {/* Sidebar Start*/}
              {/* -------------------------------- */}
              <div className="flex items-center justify-center mb-8">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-[#193db0]"
                />
              </div>
              <h2 className="text-[#193db0] text-xl font-bold mb-4 text-center">
                Aya Rimawi
              </h2>
              {/* =========================== */}
              {/* nav استخدمنا لأنو لما نحكي عن قسم في تنقل ال best انك تستخدم nav لأنو بال seo يساعد بتحليل وتفسير روابط التنقل */}
              <nav className="space-y-2">
                {/*  الفكرة هون انك بدك تعمل تكرار لكل عنصر بالمصفوفة وتعيده ك مصفوفة جديدة على انه button */}
                {/* section: هو عنصر واحد من مصفوفة sections. يتم استخدامه في كل استدعاء لدالة map. */}
                {sections.map((section) => (
                  // يعني أن كل عنصر في sections يتحول إلى زر
                  <button
                    // هلأ انا بدي الف على كل عنصر بس بدي اميز العناصر عن بعض لحتى اميز العناصر عن بعض بدي مفتاح يميزهم عن بعض
                    // الي هو key وهاد المفتاح بكون عبارة عن id كل عنصر من هاي العناصر
                    key={section.id}
                    // طيب بداية بدك تعرف انو في حال classname انا بستخدم القيمة الحالية من usestat
                    // الي صار هون لكتابة عبارة شرطية داخل classname بكل بساطة نستخدم '{}'
                    // الي بصير انو القسم الي انا في اذا شغال ياخد تنسيق معين اذا لأ ياخد تنسيق
                    className={`w-full text-left p-3 rounded flex items-center ${
                      activeSection === section.id
                        ? "bg-[#193db0] text-white"
                        : "text-gray-600 hover:bg-gray-200"
                    }`}
                    onClick={() => {
                      // هلأ حكينا في حال ال function بستخدم ال setValue تبعت ال useState
                      // هون قصده عند النقر على القسم الموجود بال section  غير قيمة ال section الى القيمة الي تم النقر عليها
                      setActiveSection(section.id);
                      // هاي كمان القصد عند النقر على الزر قم بإغلاق شريط الجاني اذا كان مفتوحًا (هاي بال (responsive)
                      setIsSidebarOpen(false);
                    }}
                  >
                    {/* مش عملنا button هاي قيمة كل زر انو فيها الاسم والايقونة */}
                    <span className="mr-3">{section.icon}</span>
                    {section.name}
                  </button>
                ))}
              </nav>
              {/* =========================== */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0 sm:space-x-2">
                  <button
                    // هون الحدث الاكبر للانتقال ما بين صفحة ال profile الى صفحة home
                    onClick={handleHomeNavigation}
                    className="flex-1 p-3 rounded flex items-center justify-center text-gray-600 hover:bg-gray-200"
                  >
                    <svg
                      // xmlns هي قيمة ثابتة ب svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2"
                      // تحديد لون الصورة
                      fill="none"
                      // هو مستطيل وهمي لتحديد مساحة العرض
                      viewBox="0 0 24 24"
                      // تحديد لون الحافة
                      stroke="currentColor"
                    >
                      <path
                        //  يُحدد شكل نهاية الخطوط عند الحواف
                        strokeLinecap="round"
                        // يُحدد شكل تقاطع الخطوط عند الزوايا
                        strokeLinejoin="round"
                        // يُحدد سمك (عرض) الحافة
                        strokeWidth={2}
                        // سلسلة أوامر وبيانات تحدد كيفية رسم المسار داخل SVG.
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Home
                  </button>
                  <button
                    // هون الحدث الاكبر للانتقال ما بين صفحة ال profile الى صفحة home
                    onClick={handleLogout}
                    className="flex-1 p-3 rounded flex items-center justify-center text-gray-600 hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    Logout
                  </button>
                </div>
              </div>
            </div>
            {/* ---------------------------------------------------------------------------- */}
            {/* Main Content */}
            <div className="md:w-3/4 p-4 md:p-8">
              <h1 className="text-2xl md:text-3xl font-bold text-[#193db0] mb-6">
                {sections.find((s) => s.id === activeSection).name}
              </h1>
              {activeSection === "personal" && <PersonalInfo />}
              {activeSection === "orders" && <OrdersInfo />}
              {/* Add other sections here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PersonalInfo = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#193db0] focus:border-[#193db0]"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#193db0] focus:border-[#193db0]"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#193db0] focus:border-[#193db0]"
          />
        </div>
        <div>
          <label
            htmlFor="dob"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#193db0] focus:border-[#193db0]"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="bg-[#193db0] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

const OrdersInfo = () => {
  const orders = [
    { id: 1, date: "2023-05-01", total: 150.99, status: "Delivered" },
    { id: 2, date: "2023-04-15", total: 89.99, status: "Processing" },
    { id: 3, date: "2023-03-30", total: 200.5, status: "Shipped" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Order ID
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="px-4 py-2 whitespace-nowrap">{order.id}</td>
              <td className="px-4 py-2 whitespace-nowrap">{order.date}</td>
              <td className="px-4 py-2 whitespace-nowrap">
                ${order.total.toFixed(2)}
              </td>
              <td className="px-4 py-2 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-800"
                      : order.status === "Processing"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfilePage;
