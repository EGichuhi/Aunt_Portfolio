export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              With over three decades of professional experience, I've dedicated my career to fostering meaningful connections and driving organizational success through effective people management and strategic leadership.
            </p>
            <p className="text-lg text-gray-700">
              My approach combines time-tested wisdom with contemporary best practices, ensuring sustainable results and positive workplace relationships.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Professional portrait"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};