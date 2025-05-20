import heroImage from "../../assets/heroImage.png";

export default function AboutVereda() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-12 gap-12">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h3 className="text-blue-500 tracking-widest uppercase text-sm mb-2">
            About Our Vereda
          </h3>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Good Qualification Services And Better Skills
          </h2>
          <p className="text-gray-600 mb-6 text-base leading-relaxed">
            Vereda Digital Technologies Private Limited is an emerging bootcamp provider that enables
            learners through rigorous and highly specialized training. Our aim is to revolutionise tech
            education in India. We believe in outcomes and skills over degrees and certificates.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <img src="/icon-instructor.svg" alt="Icon" className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-gray-800 font-semibold">Skilled Instructors</h4>
                <p className="text-gray-600 text-sm">
                  Our instructors are provided with tools and skills to teach what they love.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <img src="/icon-certificate.svg" alt="Icon" className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-gray-800 font-semibold">Get Certificate</h4>
                <p className="text-gray-600 text-sm">
                  Complete the courses to earn a certificate and unlock access to career support resources.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <img src="/icon-online-class.svg" alt="Icon" className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-gray-800 font-semibold">Online Classes</h4>
                <p className="text-gray-600 text-sm">
                  Study from the comfort of your home with our flexible online classes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center relative">
          <div className="absolute top-0 left-0 w-0 h-0 border-b-[400px] md:border-b-[600px] border-l-[400px] md:border-l-[600px] border-b-sky-500 border-l-transparent"></div>
          <div className="relative z-10 w-60 h-60 md:w-72 md:h-72 bg-sky-100 rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={heroImage}
              alt="About Vereda"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
