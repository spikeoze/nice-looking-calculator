import React, { useReducer } from "react";
import { Container, Button, Grid, Center, Group } from "@mantine/core";
import DigitButton from "./DigitButton";
import OperatorButton from "./OpratorButton";
import reducer from "./reducer";
import { motion } from "framer-motion";

const initialState = {
  current: 0,
  previous: null,
  operator: null,
  overwrite: false,
};

function App() {
  const [{ current, previous, operator }, dispatch] = useReducer(
    reducer,
   initialState
  );

  return (
    <Container style={{ height: 600, overflow:'hidden', backgroundColor:'#dfeaf3' }}>
      <motion.div
        drag
        dragElastic={0.2}
        dragMomentum={false}
        dragConstraints={{
          top: 20,
          left: 20,
          right: 650,
          bottom: 220,
        }}
      >
        <div className="calculator-wrapper">
          <div className="top">
            <p className="title">Calculator</p>
            <div className="MRC">
              <div className="minimize MRCshape"></div>
              <div className="resize MRCshape"></div>
              <div className="close MRCshape"></div>
            </div>
          </div>
          <div className="screen size flex">
            <p className="previous num">
              {previous} {operator}
            </p>
            <p className="current num">{current}</p>
          </div>
          <div className="buttons size">
            <Group style={{ marginTop: 10 }}>
              <Grid gutter={0}>
                <Grid.Col span={6}>
                  <Button style={{ width: "109px" }} onClick={()=> dispatch({type:"ALL-CLEAR"})} >AC</Button>
                </Grid.Col>

                <Grid.Col span={4}>
                  <Button style={{ width: "70px" }} onClick={()=> dispatch({type:"CLEAR"})} >C</Button>
                </Grid.Col>

                <Grid.Col span={2}>
                  <OperatorButton operator="÷" dispatch={dispatch}>
                    ÷
                  </OperatorButton>
                </Grid.Col>
              </Grid>
            </Group>

            <Group style={{ marginTop: 8 }}>
              <Grid gutter={8.5}>
                <Grid.Col span={3}>
                  <DigitButton digit={"7"} dispatch={dispatch}>
                    7
                  </DigitButton>
                </Grid.Col>

                <Grid.Col span={3}>
                  <DigitButton digit="8" dispatch={dispatch}>
                    8
                  </DigitButton>
                </Grid.Col>

                <Grid.Col span={3}>
                  <DigitButton digit="9" dispatch={dispatch}>
                    9
                  </DigitButton>
                </Grid.Col>

                <Grid.Col span={3}>
                  <OperatorButton operator="*" dispatch={dispatch}>
                    *
                  </OperatorButton>
                </Grid.Col>
              </Grid>
            </Group>

            <Group style={{ marginTop: 8 }}>
              <Grid gutter={8.5}>
                <Grid.Col span={3}>
                  <DigitButton digit="4" dispatch={dispatch}>
                    4
                  </DigitButton>
                </Grid.Col>

                <Grid.Col span={3}>
                  <DigitButton digit="5" dispatch={dispatch}>
                    5
                  </DigitButton>
                </Grid.Col>

                <Grid.Col span={3}>
                  <DigitButton digit="6" dispatch={dispatch}>
                    6
                  </DigitButton>
                </Grid.Col>

                <Grid.Col span={3}>
                  <OperatorButton operator="+" dispatch={dispatch}>
                    +
                  </OperatorButton>
                </Grid.Col>
              </Grid>
            </Group>

            <Group style={{ marginTop: 8 }}>
              <Grid gutter={8.5}>
                <Grid.Col span={3}>
                  <DigitButton digit="1" dispatch={dispatch}>
                    1
                  </DigitButton>
                </Grid.Col>

                <Grid.Col span={3}>
                  <DigitButton digit="2" dispatch={dispatch}>
                    2
                  </DigitButton>
                </Grid.Col>

                <Grid.Col span={3}>
                  <DigitButton digit="3" dispatch={dispatch}>
                    3
                  </DigitButton>
                </Grid.Col>

                <Grid.Col span={3}>
                  <OperatorButton operator="-" dispatch={dispatch}>
                    -
                  </OperatorButton>
                </Grid.Col>
              </Grid>
            </Group>

            <Group style={{ marginTop: 8 }}>
              <Grid gutter={8.5}>
                <Grid.Col span={3}>
                  <DigitButton digit="." dispatch={dispatch}>
                    .
                  </DigitButton>
                </Grid.Col>

                <Grid.Col span={3}>
                  <DigitButton digit="0" dispatch={dispatch}>
                    0
                  </DigitButton>
                </Grid.Col>

                <Grid.Col span={6}>
                  <Button style={{ width: "123px" }} onClick={()=> dispatch({type:"TOTAL"})}>=</Button>
                </Grid.Col>
              </Grid>
            </Group>
          </div>
        </div>
      </motion.div>
    </Container>
  );
}

export default App;
