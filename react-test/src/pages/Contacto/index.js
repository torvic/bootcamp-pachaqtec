/* eslint-disable no-template-curly-in-string */
import 'antd/dist/antd.css';
import FormMethod from '../../componentes/FormMethod';
import FormLayout from '../../componentes/FormLayout';
import { Form, Input, InputNumber, Button } from 'antd';
import { DatePicker, Space } from 'antd';
import { Row, Col } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};

const validateMessages = {
  // eslint-disable-next-line no-template-curly-in-string
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const Contacto = () => {
  const { RangePicker } = DatePicker;

  const onFinish = (values) => {
    console.log(values);
  };

  /* const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleRangePicker = (date, dateString) => {
    console.log(dateString);
  }; */

  return (
    <Row align="middle">
      <Col span={8}>
        <Form
          style={{ marginTop: '10%' }}
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={['user', 'name']}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['user', 'email']}
            label="Email"
            rules={[
              {
                type: 'email',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['user', 'age']}
            label="Age"
            rules={[
              {
                type: 'number',
                min: 0,
                max: 99,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name={['user', 'website']} label="Website">
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'introduction']} label="Introduction">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col span={8}>
        <FormMethod />
      </Col>
      <Col span={8}>
        <FormLayout />
      </Col>
      <Col span={8}>
        <FormLayout />
      </Col>
      <Col span={8}>
        <FormLayout />
      </Col>
    </Row>
  );
};

export default Contacto;
