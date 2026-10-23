import { StyleSheet, Text, View } from 'react-native';

interface BadgeProps {
    label: string;
    color: string;
}

export function Badge({ label, color }: BadgeProps) {
    return (
        <View style={[styles.badge, { borderColor: color }]}>
            <Text style={[styles.text, { color }]}>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    badge: {
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 999,
        borderWidth: 1,
    },
    text: {
        fontSize: 12,
        fontWeight: '700',
    },
});
