CREATE TABLE IF NOT EXISTS arbitrators(
    id SERIAL PRIMARY KEY,
    contract_address VARCHAR(45) NOT NULL,
    arbitrator_network VARCHAR(10) NOT NULL,
    arbitrator_price VARCHAR(45) NOT NULL,
    ruling_time INT NOT NULL,
    arbitrator_address VARCHAR(45) NOT NULL,
    arbitrator_description VARCHAR DEFAULT '',
    created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO arbitrators(contract_address, arbitrator_network, arbitrator_price, ruling_time, arbitrator_address, arbitrator_description) VALUES ('0xc4298302d32CD1F3D856EC59e7C02fc5b69255c3',  'goerli', '20000000000000000', '180', '0x1474CfFA8f8E1B48a37543510de18bC8Cc835406', '');


SELECT * FROM arbitrators;