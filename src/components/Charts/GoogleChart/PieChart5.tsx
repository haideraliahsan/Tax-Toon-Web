import { Card, CardBody, Col } from "reactstrap";
import { RotatingPieChart } from "utils/Constant";
import { Chart } from "react-google-charts";
import { googleChartData } from "Data/Charts/GoogleChart";
import CommonCardHeading from "CommonElements/CommonCardHeading";

const PieChart5Class = () => {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonCardHeading smallHeading={RotatingPieChart} />
        <CardBody className="chart-block">
          <div className="chart-overflow" id="pie-chart1">
            <Chart
              width={"100%"}
              height={"400px"}
              chartType={"PieChart"}
              loader={<div>{"Loading Chart"}</div>}
              data={googleChartData.GoogleRotatingPieChart2.data}
              options={googleChartData.GoogleRotatingPieChart2.option}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PieChart5Class;
