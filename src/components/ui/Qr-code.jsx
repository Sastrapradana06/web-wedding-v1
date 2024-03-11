import { QRCode, Space } from 'antd';
const QrCodeLokasi = () => {
  return (
    <Space direction="vertical" align="center">
      <QRCode
        type="canvas"
        // icon="/img_1.jpg"
        value="https://maps.app.goo.gl/8RsDckEX1zE3PjfXA"
        size={250}
      // iconSize={80}
      />
    </Space>
  );
};

export default QrCodeLokasi;