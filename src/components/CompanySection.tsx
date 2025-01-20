interface CompanySectionProps {
  name: string;
  description: string;
  role: string;
  achievements: string[];
  imageSrc: string;
  isReversed?: boolean;
}

export const CompanySection = ({
  name,
  description,
  role,
  achievements,
  imageSrc,
  isReversed = false,
}: CompanySectionProps) => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${isReversed ? 'md:grid-flow-dense' : ''}`}>
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-primary">{name}</h3>
            <p className="text-lg text-gray-600 font-medium">{role}</p>
            <p className="text-gray-700">{description}</p>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span className="text-gray-700">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
            <img 
              src={imageSrc} 
              alt={`Work at ${name}`}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};