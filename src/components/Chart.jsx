import React from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  getbackpress,
  getbowpress,
  getflutterkick,
  getfrontpress,
  gethiplift,
  getkneelift,
  getkneeliftcombo,
  getkneetochest,
  getlegraise,
  getlegscissors,
  getmountainclimber,
} from "../reducks/users/selectors";
import { useSelector } from "react-redux";
import ChartInput from "./ChartInput";

export const BackPressChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getbackpress(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAY"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};

export const BowPressChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getbowpress(selector);
  return (
    <>
      <AreaChart
        width={900}
        height={500}
        data={data}
        margin={{ top: 40, right: 10, left: 10, bottom: 10 }}
      >
        <XAxis dataKey="day" interval={0} />
        <YAxis domain={[0, 500]} />
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="FFFFF" fillOpacity={0.6} />
      </AreaChart>
      <ChartInput work={work} />
    </>
  );
};

export const FlutterKickChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getflutterkick(selector);
  return (
    <>
      <AreaChart
        width={900}
        height={500}
        data={data}
        margin={{ top: 40, right: 10, left: 10, bottom: 10 }}
      >
        <XAxis dataKey="day"/>
        <YAxis domain={[0, 500]} />
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="FFFFF" fillOpacity={0.6} />
      </AreaChart>
      <ChartInput work={work} />
    </>
  );
};

export const FrontPressChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getfrontpress(selector);
  return (
    <>
      <AreaChart
        width={900}
        height={500}
        data={data}
        margin={{ top: 40, right: 10, left: 10, bottom: 10 }}
      >
        <XAxis dataKey="day" interval={0} />
        <YAxis domain={[0, 500]} />
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="FFFFF" fillOpacity={0.6} />
      </AreaChart>
      <ChartInput work={work} />
    </>
  );
};

export const HipLiftChart = (work) => {
  const selector = useSelector((state) => state);
  const data = gethiplift(selector);
  return (
    <>
      <AreaChart
        width={900}
        height={500}
        data={data}
        margin={{ top: 40, right: 10, left: 10, bottom: 10 }}
      >
        <XAxis dataKey="day" interval={0} />
        <YAxis domain={[0, 500]} />
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="FFFFF" fillOpacity={0.6} />
      </AreaChart>
      <ChartInput work={work} />
    </>
  );
};

export const KneeLiftChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getkneelift(selector);
  return (
    <>
      <AreaChart
        width={900}
        height={500}
        data={data}
        margin={{ top: 40, right: 10, left: 10, bottom: 10 }}
      >
        <XAxis dataKey="day" interval={0} />
        <YAxis domain={[0, 500]} />
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="FFFFF" fillOpacity={0.6} />
      </AreaChart>
      <ChartInput work={work} />
    </>
  );
};

export const KneeLiftComboChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getkneeliftcombo(selector);
  return (
    <>
      <AreaChart
        width={900}
        height={500}
        data={data}
        margin={{ top: 40, right: 10, left: 10, bottom: 10 }}
      >
        <XAxis dataKey="day" interval={0} />
        <YAxis domain={[0, 500]} />
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="FFFFF" fillOpacity={0.6} />
      </AreaChart>
      <ChartInput work={work} />
    </>
  );
};

export const KneetoChestChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getkneetochest(selector);
  return (
    <>
      <AreaChart
        width={900}
        height={500}
        data={data}
        margin={{ top: 40, right: 10, left: 10, bottom: 10 }}
      >
        <XAxis dataKey="day" interval={0} />
        <YAxis domain={[0, 500]} />
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="FFFFF" fillOpacity={0.6} />
      </AreaChart>
      <ChartInput work={work} />
    </>
  );
};

export const LegRaiseChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getlegraise(selector);
  return (
    <>
      <AreaChart
        width={900}
        height={500}
        data={data}
        margin={{ top: 40, right: 10, left: 10, bottom: 10 }}
      >
        <XAxis dataKey="day" interval={0} />
        <YAxis domain={[0, 500]} />
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="FFFFF" fillOpacity={0.6} />
      </AreaChart>
      <ChartInput work={work} />
    </>
  );
};

export const LegScissorsChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getlegscissors(selector);
  return (
    <>
      <AreaChart
        width={900}
        height={500}
        data={data}
        margin={{ top: 40, right: 10, left: 10, bottom: 10 }}
      >
        <XAxis dataKey="day" interval={0} />
        <YAxis domain={[0, 500]} />
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="FFFFF" fillOpacity={0.6} />
      </AreaChart>
      <ChartInput work={work} />
    </>
  );
};

export const MountainClimberChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getmountainclimber(selector);
  return (
    <>
      <AreaChart
        width={900}
        height={500}
        data={data}
        margin={{ top: 40, right: 10, left: 10, bottom: 10 }}
      >
        <XAxis dataKey="day" interval={0} />
        <YAxis domain={[0, 500]} />
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="FFFFF" fillOpacity={0.6} />
      </AreaChart>
      <ChartInput work={work} />
    </>
  );
};
