interface TitleProps {
  title: string;
  description: string;
}

const Title = ({ title, description }: TitleProps) => {
  return (
    <div className="text-center mt-8 text-slate-700">
      <h2 className="text-3xl sm:text-4xl font-medium text-primary">{title}</h2>
      <p className="max-sm max-w-2xl mt-4 mx-auto text-muted-foreground">
        {description}
      </p>
    </div>
  );
};
export default Title;
