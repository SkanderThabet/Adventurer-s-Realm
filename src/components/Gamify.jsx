import { Typography, Tag, Button, Table,Space , Card} from "antd";
import Runes from "../Runes.png";
import {FireFilled} from "@ant-design/icons";

export default function Gamify({ tab }) {

  const { Title } = Typography;
  const days = [10, 10, 10, 20, 20, 30, 50];
  const dataSource = [];
  const columns = [
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
    },
    {
      title: "Player",
      dataIndex: "ethAddress",
      key: "ethAddress",
      
    },
    {
      title: "Runes Accumulated",
      dataIndex: "runes",
      key: "runes",
      align: "right",
    },
  ];
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
    daily: {
      marginTop: "20px",
      marginBottom: "35px",
      display: "flex",
      justifyContent: "space-between",
    },
    rew: {
      marginTop: "20px",
      marginBottom: "35px",
      display: "flex",
      gap: "35px",
      flexWrap: "wrap",
    },
    collect: {
      background: "#21bf96",
      borderColor: "#21bf96",
      width: "150px",
    },
    cantCollect: {
      background: "#c5c9c7",
      borderColor: "#c5c9c7",
      width: "150px",
    },
    claimrow: {
      display: "flex",
      gap: "25px",
      marginBottom: "35px",
      flexWrap: "wrap",
    },
    rewardCard: {
      width: "310px",
      height: "400px",
      borderRadius: "15px",
    },
    rewardImg: {
      height: "200px",
      overflow: "hidden",
      borderRadius: "15px 15px 0 0",
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

  if (tab === "runes") {
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
            style={styles.collect}

          >
            Collect Runes
          </Button>
        </div>
        <div style={styles.claimrow}>
            {days.map((e, i) => (
              <>
                <div className={"runeBtn"}>
                  <p style={{ fontSize: "12px" }}>{`Day ${i + 1}`}</p>
                  <img src={Runes} alt="" style={{ width: "40%", margin: "6px auto" }} />
                  <p style={{ color: "white", fontSize: "18px" }}>{`+${e}`}</p>
                </div>
              </>
            ))}
          </div>
          <span style={{ color: "gray" }}>
            Learn more abour Moralis?{" "}
            <a href="https://www.moralis.io">Our website</a>
          </span>
      </div>
    );

  }
  if (tab === "leaderboard") {
    return (
      <div>
        <Title level={2} style={{ color: "white" }}>
          Infernum Rune Collectors Leaderboard
        </Title>
        <Table
            style={{ marginTop: "35px" }}
            dataSource={dataSource}
            columns={columns}
          />
        <p style={{ color: "gray" }}>
          Ranking of players with the highest amount of runes
        </p>
      </div>
    );

  }
  if (tab === "rewards") {
    return (
      <div style={{ paddingLeft: "5vw", width: "70vw" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Title level={2} style={{ color: "white" }}>
            Claim Your Rewards
          </Title>
          <Space size={"small"}>
            <span style={{ color: "gray" }}> Your Runes:</span>
            <Tag color={"#324252"} style={{ height: "22px" }}>
              <FireFilled /> 120
            </Tag>
          </Space>
        </div>
        <p style={{ color: "gray", marginBottom: "35px" }}>
          Dillignetly collecting runes will allow you to claim amazing rewards
          like NFTs and merch. Browse to see what you can afford.
        </p>

        <Tag color="rgba(47,79,79, 0.2)" style={{ color: "#21bf96" }}>
          Claim Rewards
        </Tag>
        <div style={styles.rew}>
          <Card
           
            hoverable
            style={styles.rewardCard}
            cover={
              <div style={styles.rewardImg}>
                <img src="" alt=""></img>
              </div>
            }
          >
            <Title level={5} style={{ color: "white" }}>
              Rune Collector - Heroes bundle NFT
            </Title>
            <p style={{ color: "gray" }}>
              Collect enough runes to earn the title of Rune Collector and join
              a community of Heroes NFT holders.
            </p>
            <div style={styles.bottom}>
              <Space size={"small"}>
                <span style={{ color: "gray" }}> Price:</span>
                <Tag color={"#324252"} style={{ height: "22px" }}>
                  <FireFilled /> 2000
                </Tag>
              </Space>
              <span style={{ color: "gray" }}> Supply: 670/1000</span>
            </div>
          </Card>
          <Card
            hoverable
            style={styles.rewardCard}
            cover={
              <div style={styles.rewardImg}>
                <img src="" alt=""></img>
              </div>
            }
          >
            <Title level={5} style={{ color: "white" }}>
              Infernum Merch - Hoodie
            </Title>
            <p style={{ color: "gray" }}>
              Upgrade your wardrobe, by coverting your runes into some fresh
              Infernum swag!
            </p>
            <div style={styles.bottom}>
              <Space size={"small"}>
                <span style={{ color: "gray" }}> Price:</span>
                <Tag color={"#324252"} style={{ height: "22px" }}>
                  <FireFilled /> 10000
                </Tag>
              </Space>
              <span style={{ color: "gray" }}> Supply: Infinite</span>
            </div>
          </Card>
        </div>
      </div>
        
    );

  }

}

