import 'antd/dist/antd.css';
import { DatePicker, Space } from 'antd';

const Contacto = () => {
  const { RangePicker } = DatePicker;

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleRangePicker = (date, dateString) => {
    console.log(dateString);
  };

  return (
    <div style={{ marginLeft: '20px' }}>
      <h2>Formularios de Contacto</h2>
      <form>
        <Space direction="vertical">
          <DatePicker onChange={onChange} />
          <RangePicker onChange={handleRangePicker} />
        </Space>
      </form>
    </div>
  );
};

export default Contacto;
