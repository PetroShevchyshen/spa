import { Button } from "../../components/Button/Button";
import { Tag } from "../../components/Tag/Tag";
import { mainSectionContent } from "../../db/main-section";

export const Main = () => {
  return (
    <section className="w-full flex justify-center">
      <div className="flex flex-col justify-center items-center max-w-6xl space-y-10">
        <div>
          <h3 className="uppercase text-center text-yellow font-bold text-2xl">
            risus praesent vulputate.
          </h3>
          <h1 className="text-dark">Cursus Consequat Tristique.</h1>
        </div>
        <div className="md:flex flex-wrap flex gap-3.5 justify-center">
          {mainSectionContent.map((item, index) => (
            <Tag key={index} text={item} />
          ))}
        </div>
        <Button text="Lorem Ipsum" />
      </div>
    </section>
  );
};
