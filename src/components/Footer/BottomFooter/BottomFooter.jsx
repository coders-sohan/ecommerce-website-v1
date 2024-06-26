import { paymentMethods } from "../../../assets/data/paymentMethods";

const BottomFooter = () => {
  return (
    <div>
      <div className="ns_container">
        <div className="flex sm:flex-row flex-col-reverse items-center justify-between">
          <div className="text-sm font-semibold">
            <p>
              © {new Date().getFullYear()},{" "}
              <a
                href="/"
                target="_blank"
                className="no-underline hover:underline hover:text-primary"
              >
                ECOMSHOP
              </a>{" "}
              Powered by{" "}
              <a
                href="https://www.tmt-soft.com/"
                target="_blank"
                rel="noreferrer"
                className="no-underline hover:underline hover:text-tertiary"
              >
                TMT Soft
              </a>
            </p>
          </div>
          <div className="mb-4 sm:mb-0">
            <div className="flex items-center gap-1">
              {paymentMethods.map((item) => (
                <div key={item.id}>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="h-7 w-auto"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
