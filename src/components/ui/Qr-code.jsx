import { QRCode, Space } from 'antd';
const QrCodeLokasi = () => {
  return (
    <Space direction="vertical" align="center">
      <QRCode type="canvas" value="https://maps.app.goo.gl/8RsDckEX1zE3PjfXA" size={250} />
    </Space>
  );
};

export default QrCodeLokasi;