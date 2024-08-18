import { useEffect } from "react";


const MessageContainer = () => {
	

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			
		};

		document.addEventListener("keydown", handleEscape);

		return () => document.removeEventListener("keydown", handleEscape);
	}, []);

	return (
		<div className='flex flex-col justify-between w-full h-full'>
		

			<div className='w-full overflow-y-auto overflow-x-hidden h-full flex flex-col'>
			
			</div>
		</div>
	);
};
export default MessageContainer;