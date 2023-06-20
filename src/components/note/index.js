import "./style.css";

const Note = ({
  setHeading,
  setContent,
  setIsShown,
  dataKey,
  heading,
  description,
  onClick,
}) => {
  function handleOnDetailView(dataKey) {
    console.log(dataKey);
    setIsShown((state) => !state);
    setHeading(dataKey["heading"]);
    setContent(dataKey["description"]);
  }

  return (
    <div className="note">
      <div onClick={() => handleOnDetailView(dataKey)} className="heading">
        <p>{heading}</p>
      </div>
      <div onClick={() => handleOnDetailView(dataKey)} className="description">
        <div
          className="description--text"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <div onClick={onClick} className="delete">
        <img src="https://www.flaticon.com/download/icon/6861362?icon_id=6861362&author=1126&team=1126&keyword=Delete&pack=6861328&style=0&style_id=1222&format=png&color=%23000000&colored=2&size=512&selection=1&type=standard&token=03AL8dmw-kchA7J2TPouM2aOIJ2Mx1MgFUv5AjgQ88-1y0ZTBpMtEPIC2Gx2cmsuBUEOgT9XGQEZ3UFk1OvCeASpUCciOapzkCGYeWJ6U05srpK-XUKnAIpCzeXG48icJfyH8sNtJdBOjHAZsqkxOoz0LULfk1Q_E2Rc75g9V2v8P5qvf_IzW9C-QPSjr2STklPc6YYymoNxmrcDxSMsJVjCBGn2kvSo-DValJ92X4069isDhBzaRe3jewbY-GmiEvtmv_fjfWPIkxZ4wcLykML84lOA1LWe_MN1Lg_bDnCoVgF1l_Vd2gYYf6HCBGJJo8WV10d9t5NqT7m-rnx2IzTN1q-e60TybFGgtVPBCmDxvFknAEI9ml8E-hyqUo2NU4_f5Fzpd-Sn9SaajVMln2hP1jhRxGkYACTuy10AqQ_ixfY3eUNQJi9Nle-dvs0xni0EMLysbet0KDpF2WKE1ZhAq57dALb2NMIaGNQ2Pi_y2s-jBLtZ49C82hd6Uv3iX2KIbKG5stZN2Z2h38Cg50_FKBYqrMqQ1cqKlPC_jyi4mX074APm9R3L4B008ooSNHATtS-BOBTcOg2FIK5CL6MOp5UveW7SWm5fFQZL2pQ5zUe6oFnqtPBLY4YdXxN82wZVQIk03QsFXOYqbfBjNUEfVfJ9J1QcIw3DwuflNMp6MR3IfUM-oP5PCDWxnMIW6I2yXeB0sQDQFTolXo3j7-CrnM0dLFWUT0wN1WeqXndKWTd6b2RZJl_7glXtHPYnTKwXTnOHguCLMCuRKgpX3SCK6chxQ74edGsb6HqRuunLQuBJoRsosRDwmB4EuHvu5h4V_l9cShvBUU2IuDdWkq3DGXUat24rYTL3bfP3hskC4JCjCPH_rd2KiePV3M9BbixqJr_2KZ3p6-gLkedQOqJIP2LL4wuMN8X3ZYn9m3mpE6pToY01pw9uN0TuBtS5GZ3QH32diZJZSEL4IfNYOEYY7pvHkkMSQgdTXYnzDBTW_vdxSQquGnmvAgpetMRy2mUu7bbrOz7InmG3qPW7TvjQl0cptiJVGD8e8yCMDOv9fMZghnvVJOquTo5dEfiqOc4xWtBIYoHP6ica-aKlwgM35FTVhHvCgYmkAypzK2YYHbQ343L7uZwHBuKUlF0Zdx919dTZk4pmmOISBoW6_YCqQFPyk8JLLCGOAMX6K_RbnCukynVakASpCc-HD_tNrGTxEgxp1b5Yxmgaw7crg4Q26_tH5rRjqePpSqWZ7y9GfXckcalabR8hxpAwpDCrZQIx3ERIRKKlgiz1QX__PgWjWRjJXpgahqpOeAc3F9dKArnlFKF47C_w27_J9m9PUOXuv6rUaDWgANh8H1iWVOESmG-D4JkQZArgTOqvCDNpSPrN593HJKNZDOf0bdALlPr8PiiCw3vIeoVj3O35md8BixTJzbN_RZ4AbOw0m7Qvcs2MCrOXhQzynd8ehJPr0JTqUDiAzlmGCVt9EzYAvdaL46XHOCjbScXPNVV9zr3QQ2FpgMd0enNeuvEuEaKPqyb09TcjbAIPrJSV1gXbmauOt0Abl6LObFbn-rjrogtn5dbPC8MS_Cvg8&search=delete"></img>
      </div>
    </div>
  );
};

export default Note;
