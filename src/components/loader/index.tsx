import { CommonProps } from "../../types/common";

interface ILoaderProps extends CommonProps {
	loading: boolean;
}
const Loader = (props: ILoaderProps) => {
	const { loading, children } = props;
	return loading ? <div>Loading ...</div> : children;
};
export default Loader;
