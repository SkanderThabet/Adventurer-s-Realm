import moment from "moment";
import { useMoralis } from "react-moralis";

const useCollectors = () => {
  const { Moralis, account } = useMoralis();
  const getUser = async () => {
    const users = Moralis.Object.extend("RuneCollectors");
    const query = new Moralis.Query(users);
    query.equalTo("ethAddress", account);
    const data = await query.first();
    if (data !== undefined) {
        const { lastCollected} = data.attributes;
        if(
            !moment(lastCollected).isSame(
                moment.utc().subtract(1,"days"),
                "day"
            ) && !moment(lastCollected).isSame(moment.utc(),"day")
        ){
                data.set("daysInARow", 0);
            }
        
      return data;
    } else if (account) {
      const newUser = new users();
      newUser.set("ethAddress", account);
      newUser.set("runes", 0);
      newUser.set("daysInARow", 0);
      newUser.set("lastCollected", "2022-01-01T01:00:00Z");

      await newUser.save();
      return newUser;
    }
    
  };
  return { getUser };
};

export default useCollectors;
