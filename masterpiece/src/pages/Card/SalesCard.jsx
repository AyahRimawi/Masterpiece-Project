import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import dress1 from "../../assets/dress1.png";
import love1 from "../../assets/love1.png";
import addToCart from "../../assets/addToCart.png";

export function SalesCard() {
  return (
    <>
      {/* ------------------------------------------------------------------------- */}
      {/* <Card className="w-full max-w-[15rem] shadow-lg "> */}
      {/* <CardHeader floated={false} color="blue-gray"> */}
      {/* الصورة الرئيسية */}
      {/* <img src={dress1} alt="ui/ux review check" /> */}
      {/* <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " /> */}
      {/* <IconButton */}
      {/* //   size="sm" */}
      {/* color="red"
            variant="text"
            className="!absolute top-3 right-2 rounded-full"
          > */}
      {/* الأيقونة */}
      {/* <img
              className="object-cover"
              src={love1}
              alt="ui/ux review check"
            /> */}
      {/* </IconButton>
        </CardHeader> */}
      {/* حيز الكلام */}
      {/* <CardBody> */}
      {/* قسم النص والتقيم */}
      {/* <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-medium">
              Summer Short Dress
            </Typography> */}
      {/* <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-0.5 h-5 w-5 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            5.0
          </Typography> */}
      {/* </div> */}
      {/* النص لوصف الصورة */}
      {/* <Typography color="gray">
          Enter a freshly updated and thoughtfully furnished peaceful home
          surrounded by ancient trees, stone walls, and open meadows.
        </Typography> */}
      {/* قسم الايقونات */}
      {/* <div className="group flex flex-wrap justify-between items-center gap-3">
            <Tooltip content="Price">
              <span className="cursor-pointer rounded-full text-2xl p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                $ 30
              </span>
            </Tooltip>
            <Tooltip content="Add To Cart"> */}
      {/* <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70"> */}
      {/* <img
                className="object-fit w-10"
                src={addToCart}
                alt="ui/ux review check"
              /> */}

      {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                <path
                  fillRule="evenodd"
                  d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                  clipRule="evenodd"
                />
                <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
              </svg> */}
      {/* </span> */}
      {/* </Tooltip>
          </div>
        </CardBody> */}
      {/* <CardFooter className="pt-3">
        <Button size="lg" fullWidth={true}>
          Reserve
        </Button>
      </CardFooter> */}
      {/* </Card> */}
      {/* --------------------------------------------------------------------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ml-8 mr-8 justify-items-center ">
        <Card className="w-full max-w-[15rem] shadow-lg">
          <CardHeader floated={false} color="blue-gray">
            <img src={dress1} alt="ui/ux review check" />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            <IconButton
              color="red"
              variant="text"
              className="!absolute top-3 right-2 rounded-full"
            >
              <img
                className="object-cover"
                src={love1}
                alt="ui/ux review check"
              />
            </IconButton>
          </CardHeader>
          <CardBody>
            <div className="mb-3 flex items-center justify-between">
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-medium"
              >
                Summer Short Dress
              </Typography>
            </div>
            <div className="group flex flex-wrap justify-between items-center gap-3">
              <Tooltip content="Price">
                <span className="cursor-pointer rounded-full text-2xl p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  $ 30
                </span>
              </Tooltip>
              <Tooltip content="Add To Cart">
                <img
                  className="object-fit w-10"
                  src={addToCart}
                  alt="ui/ux review check"
                />
              </Tooltip>
            </div>
          </CardBody>
        </Card>

        <Card className="w-full max-w-[15rem] shadow-lg ">
          <CardHeader floated={false} color="blue-gray">
            <img src={dress1} alt="ui/ux review check" />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            <IconButton
              color="red"
              variant="text"
              className="!absolute top-3 right-2 rounded-full"
            >
              <img
                className="object-cover"
                src={love1}
                alt="ui/ux review check"
              />
            </IconButton>
          </CardHeader>
          <CardBody>
            <div className="mb-3 flex items-center justify-between">
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-medium"
              >
                Summer Short Dress
              </Typography>
            </div>
            <div className="group flex flex-wrap justify-between items-center gap-3">
              <Tooltip content="Price">
                <span className="cursor-pointer rounded-full text-2xl p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  $ 30
                </span>
              </Tooltip>
              <Tooltip content="Add To Cart">
                <img
                  className="object-fit w-10"
                  src={addToCart}
                  alt="ui/ux review check"
                />
              </Tooltip>
            </div>
          </CardBody>
        </Card>

        <Card className="w-full max-w-[15rem] shadow-lg ">
          <CardHeader floated={false} color="blue-gray">
            <img src={dress1} alt="ui/ux review check" />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            <IconButton
              color="red"
              variant="text"
              className="!absolute top-3 right-2 rounded-full"
            >
              <img
                className="object-cover"
                src={love1}
                alt="ui/ux review check"
              />
            </IconButton>
          </CardHeader>
          <CardBody>
            <div className="mb-3 flex items-center justify-between">
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-medium"
              >
                Summer Short Dress
              </Typography>
            </div>
            <div className="group flex flex-wrap justify-between items-center gap-3">
              <Tooltip content="Price">
                <span className="cursor-pointer rounded-full text-2xl p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  $ 30
                </span>
              </Tooltip>
              <Tooltip content="Add To Cart">
                <img
                  className="object-fit w-10"
                  src={addToCart}
                  alt="ui/ux review check"
                />
              </Tooltip>
            </div>
          </CardBody>
        </Card>

        <Card className="w-full max-w-[15rem] shadow-lg ">
          <CardHeader floated={false} color="blue-gray">
            <img src={dress1} alt="ui/ux review check" />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            <IconButton
              color="red"
              variant="text"
              className="!absolute top-3 right-2 rounded-full"
            >
              <img
                className="object-cover"
                src={love1}
                alt="ui/ux review check"
              />
            </IconButton>
          </CardHeader>
          <CardBody>
            <div className="mb-3 flex items-center justify-between">
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-medium"
              >
                Summer Short Dress
              </Typography>
            </div>
            <div className="group flex flex-wrap justify-between items-center gap-3">
              <Tooltip content="Price">
                <span className="cursor-pointer rounded-full text-2xl p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  $ 30
                </span>
              </Tooltip>
              <Tooltip content="Add To Cart">
                <img
                  className="object-fit w-10"
                  src={addToCart}
                  alt="ui/ux review check"
                />
              </Tooltip>
            </div>
          </CardBody>
        </Card>

        <Card className="w-full max-w-[15rem] shadow-lg ">
          <CardHeader floated={false} color="blue-gray">
            <img src={dress1} alt="ui/ux review check" />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            <IconButton
              color="red"
              variant="text"
              className="!absolute top-3 right-2 rounded-full"
            >
              <img
                className="object-cover"
                src={love1}
                alt="ui/ux review check"
              />
            </IconButton>
          </CardHeader>
          <CardBody>
            <div className="mb-3 flex items-center justify-between">
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-medium"
              >
                Summer Short Dress
              </Typography>
            </div>
            <div className="group flex flex-wrap justify-between items-center gap-3">
              <Tooltip content="Price">
                <span className="cursor-pointer rounded-full text-2xl p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  $ 30
                </span>
              </Tooltip>
              <Tooltip content="Add To Cart">
                <img
                  className="object-fit w-10"
                  src={addToCart}
                  alt="ui/ux review check"
                />
              </Tooltip>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
