import React from "react";
import {
	Text,
	FlatList
} from "react-native";

import OfertasGlobales from "./playerTemplate/OfertasGlobales";
import MisSubastas from "./playerTemplate/MisSubastas";
import MisOfertas from "./playerTemplate/MisOfertas";

export default function AuctionsList({
	auctions = [],
	opciones = 1,
	paginate = {},
	setPage = 0,
	triggerReload,
}) {
	return (
		<>
			<FlatList
				data={auctions}
				keyExtractor={(_, index) => index.toString()}
				ListEmptyComponent={<Text>No se encontraron coincidencias</Text>}
				onEndReached={() => {
					if (paginate?.page < paginate?.pages - 1) {
						setPage(paginate?.page + 1);
					}
				}}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => {
					if (opciones == 1) return <OfertasGlobales auctionData={item} triggerReload={triggerReload} />;
					if (opciones == 2) return <MisSubastas auctionData={item} />;
					if (opciones == 3) return <MisOfertas auctionData={item} triggerReload={triggerReload} />;
				}}
			/>
		</>
	);
}
