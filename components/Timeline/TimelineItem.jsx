const TimelineItem = ({ data }) => {
	const getTagColor = () => {
		let tagColor = "#3BB7A8";
		switch (data?.tag) {
			case "work":
				tagColor = "green";
				break;
			case "project":
				tagColor = "blue";
				break;
			case "education":
				tagColor = "#9b324e";
				break;
			default:
				tagColor = "#3BB7A8";
				break;
		}
		return tagColor;
	};

	return (
		<div className="timeline-item">
			<div className="timeline-item-content">
				<span className="tag" style={{ background: getTagColor() }}>
					{data?.tag}
				</span>
				<time>{data.date}</time>
				<p>{data.text}</p>
				{data.link && (
					<a href={data.link.url} target="_blank" rel="noopener" noreferrer="true">
						{data.link.text}
					</a>
				)}
				<span className="circle"></span>
			</div>
		</div>
	);
};

export default TimelineItem;
