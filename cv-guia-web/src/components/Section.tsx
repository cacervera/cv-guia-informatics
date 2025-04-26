type SectionProps = {
    title: string;
    content: string;
};

const Section = ({ title, content }: SectionProps) => (
    <section className="max-w-3xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">{title}</h2>
        <p className="text-gray-700 text-lg">{content}</p>
    </section>
);

export default Section;
