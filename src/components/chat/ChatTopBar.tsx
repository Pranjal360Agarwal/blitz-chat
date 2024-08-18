import { Avatar, AvatarImage } from "../ui/avatar";
import { Info, X } from "lucide-react";


const ChatTopBar = () => {

	return (
		<div className='w-full h-20 flex p-4 justify-between items-center border-b'>
			<div className='flex items-center gap-2'>
				<Avatar className='flex justify-center items-center'>
					<AvatarImage
						
						alt='User Image'
						className='w-10 h-10 object-cover rounded-full'
					/>
				</Avatar>
				
			</div>

			<div className='flex gap-2'>
				<Info className='text-muted-foreground cursor-pointer hover:text-primary' />
				<X
					className='text-muted-foreground cursor-pointer hover:text-primary'
			
				/>
			</div>
		</div>
	);
};
export default ChatTopBar;