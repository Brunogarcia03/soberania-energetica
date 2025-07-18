const Card = ({ image, title, place, paragraph }) => {
  return (
    <div class="group w-full bg-[#253366] hover:bg-[#FFDC8A] text-[#FFDC8A] hover:text-[#253366] smMd:max-w-[290px] border-[1px] border-[#555555CC] -mb-[1px] -mx-[1px] smMd:mx-0 transition-all duration-300 ease-in-out hover:scale-110">
      <div class="w-full h-full flex flex-col items-center flex-grow">
        <div class="relative w-full flex flex-col items-center overflow-hidden">
          <div class="absolute top-0 left-0 bg-[#253366] group-hover:bg-[#FFDC8A] text-[#FFDC8A] group-hover:text-[#253366] text-xs px-[0.53125rem] py-[0.15625rem] smMd:px-2.5 smMd:py-1.5 border-b-[1px] border-r-[1px] border-[#555555CC] transition-colors duration-300 ease-in-out">
            {place}
          </div>
          <img
            class="w-full max-h-[150px] min-w-[250px] object-cover"
            src={image}
            alt="Discussing ideas in the office"
          />
          <div class="absolute -bottom-[1px] -right-[1px] w-6 smMd:w-12 ">
            <div class="absolute border-[#555555CC] bottom-[0px] left-[0px] h-[100%] w-[1px]" />
            <div class="absolute border-[#555555CC] top-[0px] left-[0px] h-[1px] w-[100%]" />
            <svg
              viewBox="0 0 37 35"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              class="transition-colors duration-300 ease-in-out"
            >
              <title>Group 20@2x</title>
              <g id="Page-1" stroke="none" fill="#FFDC8A" fill-rule="evenodd">
                <g transform="translate(-498.000000, -744.000000)">
                  <g
                    id="Group-20"
                    transform="translate(498.000000, 744.000000)"
                  >
                    <path
                      d="M36.5,0.5 L36.5,34.5 L0.5,34.5 L0.5,0.5 L36.5,0.5 Z"
                      id="Rectangle-22"
                      stroke="none"
                      fill="#253366"
                      class="group-hover:fill-[#FFDC8A] transition-colors duration-300 ease-in-out"
                    ></path>
                    <polygon
                      id="Polygon-3"
                      fill="#FFDC8A"
                      opacity="0.899999976"
                      transform="translate(20.723494, 17.039508) rotate(90.000000) translate(-20.723494, -17.039508) "
                      points="12.7234936 24.0395076 28.7234936 24.0395076 20.7234936 10.0395076"
                      class="group-hover:fill-[#253366] transition-colors duration-300 ease-in-out"
                    ></polygon>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div class="w-full flex flex-col flex-grow items-center text-center pt-2 smMd:pt-3 px-0.5 gap-1 smMd:gap-0 border-t-[1px] border-[#555555CC]">
          <h3 class="font-neuton text-lg smMd:text-xl font-medium leading-[0.875rem] smMd:leading-4">
            {title}
          </h3>
          <p class="font-neuton font-light text-balance pt-0.5 smMd:pt-2 pb-4 text-md smMd:text-lg leading-[0.875rem] smMd:leading-4">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
