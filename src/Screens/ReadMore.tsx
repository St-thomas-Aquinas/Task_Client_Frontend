import { useLocation } from "react-router-dom";
import { MuiMarkdown } from 'mui-markdown';

const ProfileTwo = () => {
  const location = useLocation();
  const { fromHome }  = location.state;
  let data = fromHome


  return (
    <div>
      <MuiMarkdown>{(data)}</MuiMarkdown>;
      
    </div>
  );
};

export default ProfileTwo;