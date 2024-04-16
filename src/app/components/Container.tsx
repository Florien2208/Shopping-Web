interface ContainerProps{
    Children:React.ReactNode
}
const Container: React.FC <ContainerProps> = ({ Children }) => {
  return <div className="max-w-[1920px] mx-auto xl:px-20 md:px-2 px-4">{Children}</div>;
};
 
export default Container;