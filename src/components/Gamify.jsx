import { Typography , Tag , Button } from "antd";
import Runes from "../Runes.png";

export default function Gamify({tab}) {

  const {Title} = Typography;
  const styles = {
  collected: {
    marginTop: "20px",
    marginBottom: "40px",
    width: "310px",
    height: "150px",
    background: "#21bf96",
    borderRadius: "20px",
    display: "flex",
    overflow: "hidden",
  },
  colHeading: {
    padding: "27px",
    fontSize: "12px",
    width: "200px",
  },
  count: {
    fontSize: "28px",
    fontWeight: "600",
    marginTop: "5px",
  },
  bottom: {
    position: "absolute",
    bottom: "24px",
    left: "24px",
    width: "262px",
    display: "flex",
    justifyContent: "space-between",
  },
  };
    
  if(tab === "runes"){
    return (
      <div style={{ paddingLeft: "5vw", width: "70vw" }}>
      <Title level={2} style={{ color: "white" }}>
          My Infernum Runes
        </Title>
        <p style={{ color: "gray" }}>
          Collect Infernum Runes, climb the communnity leaderboard and claim
          magical rewards
        </p>
        <div style={styles.collected}>
          <div style={styles.colHeading}>
            <span>My Runes</span>
            <p style={styles.count}>120</p>
          </div>
          <div>
            <img src={Runes} alt="" />
          </div>
        </div>
        <Tag color="rgba(47,79,79, 0.2)" style={{ color: "#21bf96" }}>
          Collect Runes
        </Tag>
        <div style={styles.daily}>
          <div>
            <Title level={3} style={{ color: "white" }}>
              Daily Rune Collection
            </Title>
            <p style={{ color: "gray" }}>
              If you visit us everyday you will have the opportunity to receive
              bonus runes
            </p>
          </div>
          <Button
            style={collected ? styles.cantCollect : styles.collect}
            onClick={() => addRunes()}
          >
            Collect Runes
          </Button>
        </div>
      </div>
      
    );

  }
  if(tab === "leaderboard"){
    return (
      <div>
      leaderboard
      </div>
    );
    
  }
  if(tab === "rewards"){
    return (
      <div>
      rewards
      </div>
    );
    
  }

}

