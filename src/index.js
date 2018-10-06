function isCharCode (path) {
    return (
        path.node.property.name === 'charCodeAt' &&
        path.parent.arguments[0].value === 0
    );
}

function replaceNode (t, path) {
    if (!isCharCode(path)) {
        return;
    }
    const {object} = path.node;
    if (object.type === 'StringLiteral') {
        return path.parentPath.replaceWith(
            t.numericLiteral(path.node.object.value.charCodeAt(0))
        );
    }
    if (object.type === 'TemplateLiteral' && !object.expressions.length) {
        return path.parentPath.replaceWith(
            t.numericLiteral(path.node.object.quasis[0].value.raw.charCodeAt(0))
        );
    }
}

export default function ({types: t}) {
    return {
        visitor: {
            MemberExpression (path) {
                replaceNode(t, path);
            },
        },
    };
}
