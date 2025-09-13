import Notification from "../components/Notification";
const NotificationPage = () => {
  const handleNotiRead = (notificationId) => {
    console.log(`Read status changed of ${notificationId}`);
  };

  const handleNotiDelete = (notificationId) => {
    console.log(`Notification with id ${notificationId} delete`);
  };

  const notificationList = [
    {
      id: 1,
      notiHead: "Payment Success",
      notiDesc:
        "Payment of ₹50 processed successfully. Thank you for your purchase!",
      notiDet: "03/09/25 4:16pm",
    },
    {
      id: 2,
      notiHead: "Profile Update",
      notiDesc: "Profile details updated successfully",
      notiDet: "03/09/25 5:15pm",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {notificationList.map((item) => {
        const data = {
          notiId : item.id,
          notiHead : item.notiHead,
          notiDesc : item.notiDesc,
          notiDet : item.notiDesc,
          handleRead : () => {handleNotiRead(item.id);},
          handleDelete :  () => {handleNotiDelete(item.id);}
        };
       return (
          <Notification key={item.id} notiData={data}></Notification>
        );
      })}
    </div>
  );
};

export default NotificationPage;
