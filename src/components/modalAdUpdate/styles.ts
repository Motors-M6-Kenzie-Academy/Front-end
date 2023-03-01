import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
height: 100vh;
z-index: 5;
position: fixed;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.6);

    .modalAdUpdateBox {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 30rem;
        max-width: 90%;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        background-color: var(--gray10);
        border-radius: 1rem;

        p {
            font-size: 12px;
            font-weight: 500;
        }

        label {
            font-size: 12px;
            font-weight: 500;
        }

        input {
                border: 1px solid gray;
                outline: none;
                padding: 0.5rem;
                border-radius: 5px;
            }

            .buttonStyle {
                width: 6rem;
                height: 2rem;
                border-radius: 5px;
                border: 1px solid gray;
                font-size: 11px;
                font-weight: 600;
                background-color: #FFFFFF;
            }
    }

    .headerModalBox {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        font-weight: 500;

        .buttonClose {
            padding: 6px 7px 6px 7px;
            font-size: 12px;
            font-weight: 600;
            background-color: #FFFFFF;
        }
    }

    .initModalAdEdit {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 1rem;

        .buttonsTypeAd {
            display: flex;
            justify-content: space-evenly;
        }

        .titleAdEdit {
            display: flex;
            flex-direction: column;
            gap: 0.566rem;
        }
    }

    .listInfosVehicle {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .infoVehicle {
            width: 100%;
            display: flex;
            flex-direction: column;
            width: 50%;
            gap: 0.4rem;
            align-items: flex-start;

            input {
                width: 90%;
            }

            #price {
                width: 100%;
            }
        }

        #priceInfoVehicle {
            width: 100%;
            margin-top: 5px;
        }
    }

    .vehicleType {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 14px;

        .description {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .buttonVehicleType {
            display: flex;
            width: 100%;
            justify-content: space-around;
        }
    }

    .imgAdsUpadate {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 6px;

        .buttonAddImg {
            margin-top: 3px;
            padding: 0.4rem;
            color: #4529e6;
            font-size: 8px;
            font-weight: 600;
            background-color: #edeafd;
            border-radius: 4px;
        }
    }

    .ButtonUpdate {
        display: flex;
        margin-top: 10px;
        justify-content: space-evenly;

        .buttonStyleUpdate {
            padding: 10px 16px;
            border-radius: 5px;
            font-weight: 600;
            font-size: 8px;
            background-color: #dee2e6;
        }

        #buttonSave {
            background-color: #4529e6;
            color: #FFFFFF;
        }
    }

    @media screen and (min-width: 768px) {
        .headerModalBox {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        font-weight: 500;

        .buttonClose {
            padding: 8px 10px 8px 10px;
            font-size: 20px;
            font-weight: 600;
            background-color: #FFFFFF;
        }
    }

        .modalAdUpdateBox {
        width: 70%;
        max-height: 1045px;
        background-color: #FFFFFF;
        padding: 1.5rem;
        border-radius: 5px;
        font-family: "Inter", sans-serif;
        font-size: 20px;

        p {
            font-size: 17px;
            font-weight: 500;
        }

        label {
            font-size: 17px;
            font-weight: 500;
        }

        input {
                border: 1px solid gray;
                outline: none;
                padding: 1rem;
                border-radius: 5px;
                font-size: 17px;
            }

        .buttonStyle {
                width: 12rem;
                height: 3rem;
                border-radius: 5px;
                border: 1.5px solid gray;
                font-size: 18px;
                font-weight: 600;
                background-color: #FFFFFF;
            }
        }

        .imgAdsUpadate {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .buttonAddImg {
            margin-top: 3px;
            height: 2.5rem;
            color: #4529e6;
            font-size: 15px;
            font-weight: 600;
            background-color: #edeafd;
            border-radius: 4px;
        }
    }

    .ButtonUpdate {
        margin-top: 15px;
        
        .buttonStyleUpdate {
            padding: 10px 16px;
            width: 45%;
            height: 2.6rem;
            border-radius: 5px;
            font-weight: 700;
            font-size: 18px;
            background-color: #dee2e6;
        }
    }
}

@media screen and (min-width: 1024px) {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
    position: absolute;

    .modalAdUpdateBox {
        width: 40%;
        max-height: 1000px;
        background-color: #FFFFFF;
        padding: 1rem;
        margin-top: 1rem;
        border-radius: 5px;
        font-family: "Inter", sans-serif;
        font-size: 18px;

        p {
            font-size: 15px;
            font-weight: 500;
        }

        label {
            font-size: 15px;
            font-weight: 500;
        }

        input {
                border: 1.5px solid gray;
                outline: none;
                padding: 0.5rem;
                border-radius: 5px;
            }

            .buttonStyle {
                width: 40%;
                height: 2.5rem;
                border-radius: 5px;
                border: 1px solid gray;
                font-size: 18px;
                font-weight: 600;
                background-color: #FFFFFF;
            }
    }

    .headerModalBox {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        font-weight: 500;

        .buttonClose {
            padding: 6px 7px 6px 7px;
            font-size: 12px;
            font-weight: 600;
            background-color: #FFFFFF;
        }
    }

    .initModalAdEdit {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 1rem;

        .buttonsTypeAd {
            display: flex;
            justify-content: space-evenly;
        }

        .titleAdEdit {
            display: flex;
            flex-direction: column;
            gap: 0.566rem;
        }
    }

    .listInfosVehicle {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .infoVehicle {
            width: 100%;
            display: flex;
            flex-direction: column;
            width: 33.33%;
            gap: 0.4rem;
            align-items: flex-start;

            input {
                width: 85%;
            }

            #price {
                width: 100%;
            }
        }

        #priceInfoVehicle {
            width: 33.33%;
            margin-top: 0px;
        }
    }

    .vehicleType {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 14px;

        .description {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .buttonVehicleType {
            display: flex;
            width: 100%;
            justify-content: space-around;
        }
    }

    .imgAdsUpadate {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 6px;

        .buttonAddImg {
            margin-top: 3px;
            padding: 0.4rem;
            color: #4529e6;
            font-size: 15px;
            font-weight: 600;
            background-color: #edeafd;
            border-radius: 4px;
        }
    }

    .ButtonUpdate {
        display: flex;
        margin-top: 10px;
        justify-content: space-evenly;

        .buttonStyleUpdate {
            padding: 10px 16px;
            border-radius: 5px;
            font-weight: 600;
            font-size: 15px;
            background-color: #dee2e6;
        }

        #buttonSave {
            background-color: #4529e6;
            color: #FFFFFF;
        }
    }
}

`
