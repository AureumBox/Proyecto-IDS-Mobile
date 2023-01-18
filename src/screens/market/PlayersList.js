import React from "react";
import {
	Text,
	FlatList
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import AddPlayerCard from "./playerTemplate/AddPlayerCard";

export default function PlayersList({
	players = [],
	paginate = {},
	setPage = 0,
	postAuction
}) {
	return (
		<FlatList
			data={players}
			keyExtractor={(_, index) => index.toString()}
			ListEmptyComponent={<Text>No se encontraron coincidencias</Text>}
			onEndReached={() => {
				if (paginate?.page < paginate?.pages - 1) {
					setPage(paginate?.page + 1);
				}
			}}
			showsVerticalScrollIndicator={false}
			renderItem={({ item }) => {
				if (!item?.isInLineup) return <AddPlayerCard player={item} postAuction={postAuction} />;
			}}
		/>
	);
}
